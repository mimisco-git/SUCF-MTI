"use client";

import { motion } from "framer-motion";
import { scriptures } from "@/lib/data";

export function Theme() {
  return (
    <section id="theme" className="relative bg-paper-100 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[17px] uppercase tracking-[0.3em] text-green-700"
        >
          The Theme
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-display text-[35px] text-ink-950 sm:text-[41px]"
        >
          &ldquo;The walls of faith, of family altars, of truth&rdquo;
        </motion.h2>

        <div className="mt-16 grid gap-8 text-left sm:grid-cols-2">
          {scriptures.map((s, i) => (
            <motion.blockquote
              key={s.ref}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card relative rounded-2xl p-8"
            >
              <span className="absolute -top-5 left-7 font-display text-[65px] text-green-700/25">
                &ldquo;
              </span>
              <p className="font-display text-[23px] italic leading-relaxed text-ink-800">
                {s.text}
              </p>
              <cite className="mt-5 block font-mono text-[17px] uppercase tracking-[0.2em] text-green-500 not-italic">
                {s.ref}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
