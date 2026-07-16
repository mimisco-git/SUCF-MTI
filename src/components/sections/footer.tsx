"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Phone, Mail, Landmark } from "lucide-react";
import { event, contact } from "@/lib/data";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(contact.bank.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available, ignore
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-ink-950 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-5">
            <Image
              src="/nmti-logo.png"
              alt="National Metallurgical Training Institute seal"
              width={64}
              height={64}
              className="rounded-full ring-1 ring-white/15"
            />
            <div className="h-10 w-px bg-white/15" />
            <Image
              src="/sucf-logo.png"
              alt="SUCF emblem"
              width={140}
              height={111}
              className="h-16 w-auto"
            />
          </div>
          <p className="font-display text-[25px] italic text-white">
            &ldquo;Welcome home, brethren. Together, let us rebuild the broken
            walls.&rdquo;
          </p>
          <p className="font-mono text-[17px] uppercase tracking-[0.25em] text-green-500">
            Think SUCF, Pray SUCF, Act SUCF
          </p>
          <p className="font-mono text-[17px] uppercase tracking-[0.2em] text-white/50">
            {event.fellowship} &middot; {event.institute}
          </p>
          <p className="font-mono text-[16px] text-white/40">
            {event.edition} &middot; {event.dates} &middot; {event.venue}
          </p>

          {/* contact + giving */}
          <div className="mt-6 grid w-full max-w-2xl gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="glass-card-dark flex items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 shrink-0 text-green-500" />
              <span>
                <span className="block font-mono text-[15px] uppercase tracking-[0.15em] text-white/40">
                  Call
                </span>
                <span className="text-[17px] text-white">{contact.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="glass-card-dark flex items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4 shrink-0 text-green-500" />
              <span>
                <span className="block font-mono text-[15px] uppercase tracking-[0.15em] text-white/40">
                  Email
                </span>
                <span className="text-[17px] text-white">{contact.email}</span>
              </span>
            </a>
          </div>

          <button
            id="give"
            onClick={copyAccount}
            className="glass-card-dark flex w-full max-w-2xl items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors hover:bg-white/10"
          >
            <Landmark className="h-4 w-4 shrink-0 text-green-500" />
            <span className="flex-1">
              <span className="block font-mono text-[15px] uppercase tracking-[0.15em] text-white/40">
                Give &middot; {contact.bank.name}
              </span>
              <span className="text-[17px] text-white">
                {contact.bank.accountName} &middot;{" "}
                <span className="font-mono">{contact.bank.accountNumber}</span>
              </span>
            </span>
            {copied ? (
              <Check className="h-4 w-4 shrink-0 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 shrink-0 text-white/40" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}
