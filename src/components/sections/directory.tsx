"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { alumniDirectory } from "@/lib/data";

export function Directory() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return alumniDirectory;
    return alumniDirectory
      .map((set) => ({
        ...set,
        members: set.members.filter(
          (m) =>
            m.name.toLowerCase().includes(q) ||
            m.location?.toLowerCase().includes(q) ||
            set.label.toLowerCase().includes(q) ||
            set.set.includes(q)
        ),
      }))
      .filter((set) => set.members.length > 0);
  }, [query]);

  // Render oldest (pioneer, foundation) first, at the bottom of the wall visually
  const courses = [...filtered].reverse();

  return (
    <section id="directory" className="relative bg-paper-100 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-4 max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-700">
            Alumni Directory
          </p>
          <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
            Every set, a course in the wall
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            From the 1998/1999 pioneer graduates at the foundation, to the
            newest set at the top, twenty-seven years of alumni stacked like
            courses of stone, each one bearing the weight of the next.
          </p>
        </div>

        <div className="sticky top-24 z-20 my-10 flex justify-start">
          <div className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a name, set, or state..."
              className="pl-12"
              aria-label="Search alumni directory"
            />
          </div>
        </div>

        {courses.length === 0 ? (
          <p className="rounded-2xl border border-black/8 bg-paper-200 p-10 text-center text-sm text-slate-600">
            No alumni found. Try a different name, set, or state.
          </p>
        ) : (
          <div className="flex flex-col-reverse gap-2">
            {courses.map((set, ci) => (
              <motion.div
                key={set.set}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (ci % 8) * 0.04 }}
                className={`rounded-xl border border-black/8 bg-paper-200 p-5 shadow-block ${
                  ci % 2 === 0 ? "sm:ml-0 sm:mr-8" : "sm:ml-8 sm:mr-0"
                }`}
              >
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-black/8 pb-3">
                  <h3 className="font-display text-lg text-ink-950">
                    {set.label}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-green-600">
                    {set.set}
                  </span>
                </div>
                <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                  {set.members.map((m) => (
                    <div
                      key={m.name}
                      className="flex flex-col gap-0.5 text-sm text-slate-600"
                    >
                      <span className="text-ink-800">{m.name}</span>
                      <span className="flex flex-wrap items-center gap-x-4 font-mono text-xs text-slate-400">
                        {m.contact && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" /> {m.contact}
                          </span>
                        )}
                        {m.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {m.location}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
