import { spawn } from "node:child_process";

const next = spawn(
  "npx",
  ["next", "dev", "--hostname", "127.0.0.1", "--port", "4872"],
  { stdio: "inherit", cwd: process.cwd() },
);

const proxy = spawn("node", ["scripts/preview-proxy.mjs"], {
  stdio: "inherit",
  cwd: process.cwd(),
  env: { ...process.env, PORT: "4531", TARGET_PORT: "4872" },
});

function shutdown(code = 0) {
  next.kill("SIGTERM");
  proxy.kill("SIGTERM");
  setTimeout(() => process.exit(code), 500);
}

next.on("exit", (code) => {
  if (code) shutdown(code ?? 1);
});
proxy.on("exit", (code) => {
  if (code) shutdown(code ?? 1);
});

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));
