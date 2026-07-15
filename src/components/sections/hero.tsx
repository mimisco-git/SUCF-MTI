"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { event } from "@/lib/data";

const CornerstoneScene = dynamic(
  () => import("@/components/cornerstone-scene").then((m) => m.CornerstoneScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white texture-mortar"
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
            className="mb-6 flex items-center gap-4"
          >
            <span className="flex items-center gap-2">
              <Image
                src="/nmti-logo.png"
                alt="National Metallurgical Training Institute seal"
                width={48}
                height={48}
                className="rounded-full ring-1 ring-black/15"
                priority
              />
              <Image
                src="/sucf-icon.png"
                alt="SUCF emblem"
                width={48}
                height={48}
                className="rounded-full ring-1 ring-green-700/30"
                priority
              />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-600">
              {event.fellowship} &middot; {event.institute}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-[13vw] leading-[0.98] text-ink-950 sm:text-6xl lg:text-7xl"
          >
            Rebuilding the
            <br />
            <span className="italic text-green-500">Broken Walls</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-slate-600"
          >
            The {event.edition} gathers pioneer graduates of 1998 through the
            newest sets, home to Onitsha, to lay foundations again: in
            devotion, in family, in truth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-600"
          >
            <div>
              <p className="text-green-600">Date</p>
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
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-green-700" />
      </motion.a>
    </section>
  );
}
