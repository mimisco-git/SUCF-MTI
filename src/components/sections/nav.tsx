"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  { href: "#theme", label: "Theme" },
  { href: "#welcome", label: "Welcome" },
  { href: "#schedule", label: "Schedule" },
  { href: "#study", label: "Bible Study" },
  { href: "#directory", label: "Directory" },
  { href: "#hymns", label: "Hymns" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* utility bar: motto + scholarship note */}
      <div className="border-b border-black/8 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 lg:px-10">
          <p className="text-xs font-semibold text-ink-950 sm:text-sm">
            Think SUCF, Pray SUCF
            <span className="text-green-700"> and Act SUCF</span>
          </p>
          <a
            href="#schedule"
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-green-700 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-600 sm:inline-flex"
          >
            Scholarship Seminar
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* main nav */}
      <nav
        className={`border-b border-black/40 bg-ink-950 transition-shadow duration-500 ${
          scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex items-center -space-x-2">
              <Image
                src="/nmti-logo.png"
                alt="National Metallurgical Training Institute seal"
                width={34}
                height={34}
                className="rounded-full ring-2 ring-ink-950"
              />
              <Image
                src="/sucf-icon.png"
                alt="SUCF emblem"
                width={34}
                height={34}
                className="rounded-full ring-2 ring-ink-950"
                priority
              />
            </span>
            <span className="font-display text-sm tracking-wide text-white">
              SUCF <span className="text-green-500">&middot;</span> MTI Onitsha
            </span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-green-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#schedule"
            className="hidden rounded-full bg-green-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-green-600 md:inline-block"
          >
            31 Oct &middot; 2 Nov
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
