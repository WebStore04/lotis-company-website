import { NextResponse } from "next/server";

type Inquiry = {
  name?: string;
  email?: string;
  asset?: string;
  details?: string;
};

export async function POST(request: Request) {
  let body: Inquiry;
  try {
    body = (await request.json()) as Inquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "Send JSON." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const asset = body.asset?.trim() ?? "";
  const details = body.details?.trim() ?? "";

  if (!name || !email || !asset) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and asset class are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "That email does not look valid." }, { status: 400 });
  }

  console.info("[lotis inquiry]", { name, email, asset, details: details.slice(0, 500) });

  return NextResponse.json({ ok: true });
}
