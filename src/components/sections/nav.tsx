"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProgramTicker } from "./program-ticker";

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
      {/* utility bar: rolling weekly programs */}
      <div className="border-b border-black/8 bg-paper-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 lg:px-10">
          <ProgramTicker />
          <p className="hidden font-mono text-[15px] uppercase tracking-[0.2em] text-slate-400 sm:block">
            Think SUCF <span className="text-green-700">&middot; Pray SUCF &middot; Act SUCF</span>
          </p>
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
            <span className="flex shrink-0 items-center gap-2">
              <Image
                src="/nmti-logo.png"
                alt="National Metallurgical Training Institute seal"
                width={32}
                height={32}
                className="rounded-full ring-1 ring-white/15"
              />
              <Image
                src="/sucf-icon.png"
                alt="SUCF emblem"
                width={30}
                height={30}
                priority
              />
            </span>
            <span className="font-display text-[19px] tracking-wide text-white">
              SUCF <span className="text-green-500">&middot;</span> MTI Onitsha
            </span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[17px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-green-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
