"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      asset: String(data.get("asset") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.asset) {
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
      setStatus("success");
      setMessage("Received. We will reply to that email with next steps for the lot.");
    } catch {
      setStatus("error");
      setMessage("Network error. Email hello@lotis.gold instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm text-zinc-400">
          Name
          <Input
            name="name"
            autoComplete="name"
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
            className="h-11 border-white/15 bg-white/5 text-zinc-100"
            placeholder="jane@originator.com"
          />
        </label>
      </div>
      <label className="block space-y-1.5 text-sm text-zinc-400">
        Asset class
        <Input
          name="asset"
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
        <p className="text-sm text-red-400" role="alert">
          {message}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-[#c4a05a]" role="status">
          {message}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 rounded-full bg-[#c4a05a] px-6 text-[#1a1408] hover:bg-[#d4b36a]"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}
