"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { weeklyPrograms, event } from "@/lib/data";

export function ProgramTicker() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || paused) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % weeklyPrograms.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const current = weeklyPrograms[index];

  const go = (dir: 1 | -1) => {
    setPaused(true);
    setIndex((i) => (i + dir + weeklyPrograms.length) % weeklyPrograms.length);
  };

  const invite = async () => {
    const shareData = {
      title: "SUCF MTI Onitsha",
      text: `Join us for ${current.day} at ${current.time}, ${event.fellowship}, MTI Onitsha.`,
      url: typeof window !== "undefined" ? window.location.origin : undefined,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled, ignore
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url ?? ""}`);
    }
  };

  return (
    <div className="flex w-full items-center gap-3 py-1.5">
      <button
        onClick={() => go(-1)}
        aria-label="Previous program"
        className="hidden shrink-0 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-black/5 hover:text-green-700 sm:flex sm:items-center sm:justify-center"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="relative h-[38px] flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.day}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col justify-center gap-1"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-green-700">
              {current.weekday} &middot; {current.time}
            </span>
            <span className="flex items-baseline gap-2 truncate">
              <span className="text-[15px] font-semibold text-ink-950">
                {current.emoji} {current.day}
              </span>
              <span className="hidden truncate text-[13px] text-slate-400 lg:inline">
                {current.description}
              </span>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go(1)}
        aria-label="Next program"
        className="hidden shrink-0 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-black/5 hover:text-green-700 sm:flex sm:items-center sm:justify-center"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <button
        onClick={invite}
        className="hidden shrink-0 items-center gap-1.5 rounded-full bg-green-700 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-green-600 md:flex"
      >
        <Heart className="h-3 w-3 fill-current" />
        Invite a Friend
      </button>
    </div>
  );
}
