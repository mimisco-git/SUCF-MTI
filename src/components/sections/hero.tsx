"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Archive, Calendar, MapPin, User, Calculator, ArrowRight } from "lucide-react";
import { event, familyPhotos } from "@/lib/data";
import { DailyManna } from "@/components/daily-manna";
import { CgpaCalculator } from "@/components/cgpa-calculator";

export function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <section
      className="relative flex items-center overflow-hidden bg-paper-50 texture-mortar"
    >
      {/* ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(15,81,50,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-20">
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
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={() => onNavigate("schedule")}
              className="flex h-13 items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-amber-700 px-7 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(217,119,6,0.2)] transition-all hover:shadow-[0_12px_30px_rgba(217,119,6,0.3)]"
            >
              View Program Schedule
            </button>
            <button
              onClick={() => onNavigate("scholarship")}
              className="glass-card flex h-13 items-center gap-2 rounded-xl px-7 text-[15px] font-semibold text-ink-800 transition-colors hover:text-green-700"
            >
              Apply for Scholarship
            </button>
            <button
              onClick={() => setCalcOpen(true)}
              className="flex h-13 items-center gap-2 rounded-xl bg-ink-950 px-7 text-[15px] font-semibold text-white shadow-md transition-colors hover:bg-ink-800"
            >
              <Calculator className="h-4 w-4 text-green-500" />
              Academic CGPA Planner
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass-card mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl px-6 py-5"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-green-100 bg-green-100 p-2.5">
                <Calendar className="h-4 w-4 text-green-700" />
              </span>
              <span>
                <p className="font-mono text-[11px] font-bold uppercase leading-none tracking-[0.15em] text-slate-400">
                  Held
                </p>
                <p className="mt-1 text-[17px] font-semibold text-ink-800">
                  {event.dates}
                </p>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-green-100 bg-green-100 p-2.5">
                <MapPin className="h-4 w-4 text-green-700" />
              </span>
              <span>
                <p className="font-mono text-[11px] font-bold uppercase leading-none tracking-[0.15em] text-slate-400">
                  Venue
                </p>
                <p className="mt-1 text-[17px] font-semibold text-ink-800">
                  {event.venue}
                </p>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-green-100 bg-green-100 p-2.5">
                <User className="h-4 w-4 text-green-700" />
              </span>
              <span>
                <p className="font-mono text-[11px] font-bold uppercase leading-none tracking-[0.15em] text-slate-400">
                  Expositor
                </p>
                <p className="mt-1 text-[17px] font-semibold text-ink-800">
                  {event.expositor}
                </p>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-6 lg:items-stretch">
          <div className="pointer-events-none absolute -inset-8 -z-10 hidden rounded-[3rem] bg-gradient-to-br from-green-100 via-transparent to-amber-100/40 blur-2xl lg:block" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <DailyManna />
          </motion.div>
        </div>
      </div>

      {/* family preview strip */}
      <div className="relative z-10 mx-auto mt-4 max-w-7xl px-6 pb-16 lg:px-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400">
            The Family
          </p>
          <button
            onClick={() => onNavigate("family")}
            className="flex items-center gap-1 text-[14px] font-semibold text-green-700 hover:text-green-600"
          >
            See more <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {familyPhotos.map((p, i) => (
            <motion.button
              key={p.src}
              onClick={() => onNavigate("family")}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.06 }}
              className="glass-card card-hover group overflow-hidden rounded-2xl text-left"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-paper-200">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <p className="truncate px-3 py-2 text-[13px] font-semibold text-ink-800">
                {p.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <CgpaCalculator open={calcOpen} onClose={() => setCalcOpen(false)} />
    </section>
  );
}
