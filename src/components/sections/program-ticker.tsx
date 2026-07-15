"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { weeklyPrograms } from "@/lib/data";

export function ProgramTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % weeklyPrograms.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const current = weeklyPrograms[index];

  return (
    <div className="flex items-center gap-2 overflow-hidden">
      <span className="hidden shrink-0 font-mono text-[15px] uppercase tracking-[0.2em] text-slate-400 sm:inline">
        Weekly &middot;
      </span>
      <div className="relative h-5 w-56 sm:w-64">
        <AnimatePresence mode="wait">
          <motion.p
            key={current.day}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 whitespace-nowrap text-[17px] font-semibold text-ink-950 sm:text-[19px]"
          >
            {current.day}
            <span className="ml-2 font-mono text-[16px] font-medium text-green-700">
              {current.time}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
