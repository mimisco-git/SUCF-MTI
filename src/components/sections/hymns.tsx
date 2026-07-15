"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { hymns } from "@/lib/data";

export function Hymns() {
  return (
    <section id="hymns" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-700">
            Hymns &amp; Anthems
          </p>
          <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
            Songs we rebuild with
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {hymns.map((hymn, i) => (
            <motion.div
              key={hymn.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="rounded-2xl border border-black/8 bg-paper-200 p-7"
            >
              <div className="mb-4 flex items-center gap-2 text-green-700">
                <Music2 className="h-4 w-4" />
                <h3 className="font-display text-lg text-ink-950">
                  {hymn.title}
                </h3>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                {hymn.verses.map((v, vi) => (
                  <p key={vi}>{v}</p>
                ))}
                {hymn.chorus && (
                  <p className="italic text-green-500">{hymn.chorus}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
