import http from "node:http";
import net from "node:net";

const LISTEN_HOST = "0.0.0.0";
const LISTEN_PORT = Number(process.env.PORT || 4531);
const TARGET_HOST = process.env.TARGET_HOST || "127.0.0.1";
const TARGET_PORT = Number(process.env.TARGET_PORT || 4872);

function hopByHop() {
  return new Set([
    "connection",
    "keep-alive",
    "proxy-connection",
    "transfer-encoding",
    "te",
    "trailer",
    "upgrade",
    "content-length",
  ]);
}

function writePlain(res, status, message) {
  const body = message;
  res.writeHead(status, {
    "content-type": "text/plain; charset=utf-8",
    "content-length": Buffer.byteLength(body),
    connection: "close",
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const headers = { ...req.headers };
  headers.host = `${TARGET_HOST}:${TARGET_PORT}`;
  delete headers["accept-encoding"];
  headers.connection = "close";

  const upstream = http.request(
    {
      hostname: TARGET_HOST,
      port: TARGET_PORT,
      path: req.url,
      method: req.method,
      headers,
    },
    (incoming) => {
      const chunks = [];
      incoming.on("data", (chunk) => chunks.push(chunk));
      incoming.on("end", () => {
        const body = Buffer.concat(chunks);
        const skip = hopByHop();
        const out = {};
        for (const [key, value] of Object.entries(incoming.headers)) {
          if (value === undefined) continue;
          if (skip.has(key.toLowerCase())) continue;
          out[key] = value;
        }
        out["content-length"] = String(body.length);
        out.connection = "close";
        res.writeHead(incoming.statusCode || 200, out);
        res.end(body);
      });
    },
  );

  upstream.on("error", (err) => {
    console.error("preview-proxy upstream error:", err.message);
    if (!res.headersSent) {
      writePlain(res, 502, "Lotis preview proxy could not reach Next.js.");
    } else {
      res.end();
    }
  });

  req.pipe(upstream);
});

server.on("upgrade", (req, socket, head) => {
  const backend = net.connect(TARGET_PORT, TARGET_HOST, () => {
    const headerLines = Object.entries(req.headers)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`);
    backend.write(`${req.method} ${req.url} HTTP/1.1\r\n${headerLines.join("\r\n")}\r\n\r\n`);
    if (head.length) backend.write(head);
    socket.pipe(backend);
    backend.pipe(socket);
  });
  backend.on("error", () => socket.destroy());
  socket.on("error", () => backend.destroy());
});

server.listen(LISTEN_PORT, LISTEN_HOST, () => {
  console.log(`preview proxy http://${LISTEN_HOST}:${LISTEN_PORT} -> ${TARGET_HOST}:${TARGET_PORT}`);
});
