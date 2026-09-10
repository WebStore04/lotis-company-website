"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState({ name: false, email: false, topic: false });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      topic: String(data.get("topic") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
    };

    const nextInvalid = {
      name: payload.name.length === 0,
      email: payload.email.length === 0,
      topic: payload.topic.length === 0,
    };
    setInvalid(nextInvalid);

    if (nextInvalid.name || nextInvalid.email || nextInvalid.topic) {
      setStatus("error");
      setMessage("Name, email, and project type are required.");
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
      setInvalid({ name: false, email: false, topic: false });
      setStatus("success");
      setMessage("Received. We will reply about the software work or the RWA project.");
    } catch {
      setStatus("error");
      setMessage("Network error. Email hello@lotistoken.com instead.");
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
            placeholder="jane@company.com"
          />
        </label>
      </div>
      <label className="block space-y-1.5 text-sm text-zinc-400">
        Project type
        <Input
          name="topic"
          aria-invalid={invalid.topic || undefined}
          className="h-11 border-white/15 bg-white/5 text-zinc-100"
          placeholder="Product software, RWA, protocol, other"
        />
      </label>
      <label className="block space-y-1.5 text-sm text-zinc-400">
        What needs to exist when we are done?
        <Textarea
          name="details"
          className="min-h-32 border-white/15 bg-white/5 text-zinc-100"
          placeholder="Product, jurisdiction, custody or title status, or the system you need built."
        />
      </label>

      {status === "idle" ? (
        <p className="text-sm text-zinc-500">
          Software build or the RWA register. No token pitch.
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
