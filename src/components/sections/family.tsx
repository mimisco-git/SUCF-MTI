"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import { familyPhotos } from "@/lib/data";

export function Family() {
  return (
    <section id="family" className="relative bg-paper-50 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-[17px] uppercase tracking-[0.3em] text-green-500">
            The Family
          </p>
          <h2 className="mt-4 font-display text-[41px] text-ink-950 sm:text-[53px]">
            Leadership & fellowship
          </h2>
          <p className="mt-4 flex items-start gap-2 text-[19px] leading-relaxed text-slate-600">
            <Users2 className="mt-1 h-4 w-4 shrink-0 text-green-700" />
            The people carrying SUCF forward today, at MTI and across the
            wider Onitsha Area.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {familyPhotos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-200">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-display text-[21px] text-ink-950">
                  {p.caption}
                </p>
                <p className="mt-1 text-[15px] text-slate-600">{p.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
