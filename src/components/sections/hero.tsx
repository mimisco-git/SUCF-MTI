"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Archive } from "lucide-react";
import { event } from "@/lib/data";

const CornerstoneScene = dynamic(
  () => import("@/components/cornerstone-scene").then((m) => m.CornerstoneScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-paper-50 texture-mortar"
    >
      {/* ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,108,67,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-green-700/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 flex items-start gap-4"
          >
            <span className="flex shrink-0 items-center gap-2.5">
              <Image
                src="/nmti-logo.png"
                alt="National Metallurgical Training Institute seal"
                width={44}
                height={44}
                className="rounded-full ring-1 ring-black/15"
                priority
              />
              <Image
                src="/sucf-icon.png"
                alt="SUCF emblem"
                width={40}
                height={40}
                className="shrink-0"
                priority
              />
            </span>
            <p className="max-w-[15rem] pt-1 font-mono text-[16px] uppercase leading-relaxed tracking-[0.2em] text-green-600 sm:max-w-none">
              {event.fellowship}
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> &middot; </span>
              {event.institute}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="glass-card mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
          >
            <Archive className="h-3.5 w-3.5 text-green-700" />
            <span className="font-mono text-[15px] uppercase tracking-[0.2em] text-slate-600">
              Reunion Archive &middot; Concluded
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-[13vw] leading-[0.98] text-ink-950 sm:text-[65px] lg:text-[77px]"
          >
            Rebuilding the
            <br />
            <span className="italic text-green-500">Broken Walls</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-md text-[19px] leading-relaxed text-slate-600"
          >
            The {event.edition} brought together pioneer graduates of 1998
            through the newest sets, home to Onitsha, to lay foundations
            again: in devotion, in family, in truth. Here is the record of
            those three days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass-card mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 rounded-2xl px-6 py-5 font-mono text-[17px] uppercase tracking-[0.2em] text-slate-600"
          >
            <div>
              <p className="text-green-600">Held</p>
              <p className="mt-1 text-ink-800">{event.dates}</p>
            </div>
            <div className="h-8 w-px bg-black/6" />
            <div>
              <p className="text-green-600">Venue</p>
              <p className="mt-1 text-ink-800">{event.venue}</p>
            </div>
            <div className="h-8 w-px bg-black/6" />
            <div>
              <p className="text-green-600">Expositor</p>
              <p className="mt-1 text-ink-800">{event.expositor}</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[22rem] lg:h-[30rem]">
          <CornerstoneScene />
        </div>
      </div>

      <motion.a
        href="#theme"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-[15px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-green-700" />
      </motion.a>
    </section>
  );
}
