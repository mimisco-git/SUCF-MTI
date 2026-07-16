"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, RefreshCw, Sparkles } from "lucide-react";
import { dailyManna } from "@/lib/data";

function randomIndex(exclude: number) {
  if (dailyManna.length <= 1) return 0;
  let next = Math.floor(Math.random() * dailyManna.length);
  while (next === exclude) next = Math.floor(Math.random() * dailyManna.length);
  return next;
}

export function DailyManna() {
  const [index, setIndex] = useState(0);
  const verse = dailyManna[index];

  return (
    <div className="glass-card w-full max-w-md rounded-3xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-green-700">
          <BookOpen className="h-4 w-4" />
          Daily Manna
        </span>
        <button
          onClick={() => setIndex((i) => randomIndex(i))}
          aria-label="Show another verse"
          className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-black/5 hover:text-green-700"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-display text-[19px] italic leading-relaxed text-ink-800">
            &ldquo;{verse.text}&rdquo;
          </p>
          <p className="mt-4 font-mono text-[13px] font-bold uppercase tracking-[0.15em] text-green-500">
            Reference: {verse.ref}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 border-t border-black/8 pt-4 text-center">
        <p className="flex items-center justify-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">
          <Sparkles className="h-3 w-3 text-green-500" />
          Spiritual food for your day
          <Sparkles className="h-3 w-3 text-green-500" />
        </p>
      </div>
    </div>
  );
}
