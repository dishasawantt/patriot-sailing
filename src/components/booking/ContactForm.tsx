"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { site } from "@/data/site";

const field =
  "w-full rounded-xl border border-line bg-fg/[0.04] px-4 py-3 text-fg placeholder:text-fg/35 outline-none transition-colors focus:border-accent/70";
const label = "block font-sans text-xs font-semibold uppercase tracking-[0.12em] text-fg/55";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Sailing enquiry");
    const message = String(data.get("message") || "");
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-fg/[0.04] p-8">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="size-5" />
        </span>
        <h3 className="font-display text-2xl text-fg">Your email&rsquo;s ready to send.</h3>
        <p className="text-fg/65">
          We just opened your email app with the message filled in — hit send and we&rsquo;ll be in
          touch. Prefer to talk? Call{" "}
          <a href={site.phoneHref} className="text-accent-bright underline-offset-4 hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={`mt-2 ${field}`} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={label}>
          What&rsquo;s it about?
        </label>
        <input
          id="subject"
          name="subject"
          placeholder="A private sail, lessons, a gift…"
          className={`mt-2 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`mt-2 ${field} resize-none`} />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-abyss transition-colors duration-300 hover:bg-accent-bright"
        >
          Send message
          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
        <p className="text-xs text-fg/45">Opens your email app — nothing is sent until you hit send.</p>
      </div>
    </form>
  );
}
