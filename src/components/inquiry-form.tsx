"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState({ name: false, email: false, asset: false });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      asset: String(data.get("asset") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
    };

    const nextInvalid = {
      name: payload.name.length === 0,
      email: payload.email.length === 0,
      asset: payload.asset.length === 0,
    };
    setInvalid(nextInvalid);

    if (nextInvalid.name || nextInvalid.email || nextInvalid.asset) {
      setStatus("error");
      setMessage("Name, email, and asset class are required.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error ?? "Could not send the inquiry. Try email instead.");
        return;
      }
      form.reset();
      setInvalid({ name: false, email: false, asset: false });
      setStatus("success");
      setMessage("Received. We will reply to that email with next steps for the lot.");
    } catch {
      setStatus("error");
      setMessage("Network error. Email hello@lotis.gold instead.");
    }
  }

  return (
    <form method="post" action="/api/inquiry" onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm text-zinc-400">
          Name
          <Input
            name="name"
            autoComplete="name"
            aria-invalid={invalid.name || undefined}
            className="h-11 border-white/15 bg-white/5 text-zinc-100"
            placeholder="Jane Ortiz"
          />
        </label>
        <label className="space-y-1.5 text-sm text-zinc-400">
          Email
          <Input
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={invalid.email || undefined}
            className="h-11 border-white/15 bg-white/5 text-zinc-100"
            placeholder="jane@originator.com"
          />
        </label>
      </div>
      <label className="block space-y-1.5 text-sm text-zinc-400">
        Asset class
        <Input
          name="asset"
          aria-invalid={invalid.asset || undefined}
          className="h-11 border-white/15 bg-white/5 text-zinc-100"
          placeholder="Property, gold, silver, fund, other"
        />
      </label>
      <label className="block space-y-1.5 text-sm text-zinc-400">
        What is the lot?
        <Textarea
          name="details"
          className="min-h-32 border-white/15 bg-white/5 text-zinc-100"
          placeholder="Jurisdiction, custody or title status, target raise or inventory."
        />
      </label>

      {status === "idle" ? (
        <p className="text-sm text-zinc-500">
          No spam, no token pitch. Tell us the underlying asset and where it sits.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="rounded-lg border border-red-400/40 bg-red-950/40 px-3 py-2 text-sm text-red-300"
          role="alert"
        >
          {message}
        </p>
      ) : null}
      {status === "success" ? (
        <p
          className="rounded-lg border border-[#c4a05a]/40 bg-[#c4a05a]/10 px-3 py-2 text-sm text-[#e4c98a]"
          role="status"
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-full bg-[#c4a05a] px-6 text-sm font-medium text-[#1a1408] transition-colors hover:bg-[#d4b36a]",
          "disabled:pointer-events-none disabled:opacity-50"
        )}
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
