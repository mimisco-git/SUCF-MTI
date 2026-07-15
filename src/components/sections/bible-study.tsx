"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bibleStudy } from "@/lib/data";

export function BibleStudy() {
  return (
    <section id="study" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-700">
            Bible Study &middot; {bibleStudy.text}
          </p>
          <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
            {bibleStudy.topic}
          </h2>

          <ul className="mt-8 space-y-4">
            {bibleStudy.aims.map((aim, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                {aim}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-green-700/25 bg-green-700/5 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-green-600">
              Memory Verse &middot; {bibleStudy.memoryVerse.ref}
            </p>
            <p className="mt-3 font-display italic leading-relaxed text-ink-800">
              {bibleStudy.memoryVerse.text}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {bibleStudy.discussionPoints.map((dp, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>
                  <span className="mr-4 font-mono text-sm text-green-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {dp.q}
                </AccordionTrigger>
                <AccordionContent>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-green-500">
                    {dp.refs}
                  </span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 rounded-2xl bg-paper-200 p-6 text-sm leading-relaxed text-slate-600">
            {bibleStudy.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
