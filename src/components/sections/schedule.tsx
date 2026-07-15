"use client";

import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schedule } from "@/lib/data";

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-paper-100 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-700">
              Order of Service
            </p>
            <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">
              Three days, one foundation
            </h2>
          </div>
        </div>

        <Tabs defaultValue={schedule[0].day}>
          <TabsList>
            {schedule.map((d) => (
              <TabsTrigger key={d.day} value={d.day}>
                {d.day.split(",")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {schedule.map((d) => (
            <TabsContent key={d.day} value={d.day}>
              <div className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.15em] text-slate-600">
                <span>{d.day}</span>
                <span>Moderator &middot; {d.moderator}</span>
              </div>
              <ol className="divide-y divide-black/8 rounded-2xl border border-black/8 bg-paper-200">
                {d.items.map((item, i) => (
                  <motion.li
                    key={item.time + item.activity}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <span className="flex items-center gap-2 font-mono text-xs text-green-600 sm:w-40 sm:shrink-0">
                      <Clock className="h-3.5 w-3.5" />
                      {item.time}
                    </span>
                    <span className="font-display text-base text-ink-800">
                      {item.activity}
                    </span>
                    {item.person && (
                      <span className="flex items-center gap-2 text-xs text-slate-600 sm:ml-auto">
                        <User className="h-3.5 w-3.5 text-green-500" />
                        {item.person}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ol>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
