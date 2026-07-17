"use client";

import { motion } from "framer-motion";
import { chairmanLetter, presidentLetter } from "@/lib/data";

function Letter({
  letter,
  index,
}: {
  letter: typeof chairmanLetter;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass-card card-hover rounded-3xl p-8 sm:p-10"
    >
      <span className="font-display text-[77px] leading-none text-green-700/30">
        {letter.paragraphs[0].charAt(0)}
      </span>
      <div className="-mt-9 space-y-5 text-[19px] leading-relaxed text-slate-600">
        <p className="pl-2">
          <span className="invisible">{letter.paragraphs[0].charAt(0)}</span>
          {letter.paragraphs[0].slice(1)}
        </p>
        {letter.paragraphs.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-8 border-t border-black/8 pt-5">
        <p className="font-display text-[23px] text-ink-950">{letter.name}</p>
        <p className="font-mono text-[17px] uppercase tracking-[0.15em] text-green-600">
          {letter.title}
        </p>
      </div>
    </motion.article>
  );
}

export function Welcome() {
  return (
    <section id="welcome" className="relative bg-paper-50 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-16 max-w-xl">
          <p className="font-mono text-[17px] uppercase tracking-[0.3em] text-green-700">
            Words of Welcome
          </p>
          <h2 className="mt-4 font-display text-[35px] text-ink-950 sm:text-[41px]">
            Home again, brethren
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Letter letter={chairmanLetter} index={0} />
          <Letter letter={presidentLetter} index={1} />
        </div>
      </div>
    </section>
  );
}
