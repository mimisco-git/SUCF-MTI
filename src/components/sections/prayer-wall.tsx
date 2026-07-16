"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandHeart, Send, Trash2, Lock } from "lucide-react";
import { contact } from "@/lib/data";

const STORAGE_KEY = "sucf_prayer_journal_v1";

type PrayerEntry = {
  id: string;
  name: string;
  request: string;
  createdAt: string;
};

export function PrayerWall() {
  const [entries, setEntries] = useState<PrayerEntry[]>([]);
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [shareWithFellowship, setShareWithFellowship] = useState(true);

  useEffect(() => {
    try {
      const cached = window.localStorage.getItem(STORAGE_KEY);
      if (cached) setEntries(JSON.parse(cached));
    } catch {
      // ignore malformed cache
    }
  }, []);

  const persist = (next: PrayerEntry[]) => {
    setEntries(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;

    const entry: PrayerEntry = {
      id: `pr_${Date.now()}`,
      name: name.trim() || "Anonymous",
      request: request.trim(),
      createdAt: new Date().toISOString(),
    };
    persist([entry, ...entries]);

    if (shareWithFellowship) {
      const subject = encodeURIComponent(`Prayer Request: ${entry.name}`);
      const body = encodeURIComponent(entry.request);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    }

    setRequest("");
  };

  const remove = (id: string) => {
    persist(entries.filter((e) => e.id !== id));
  };

  return (
    <section id="prayer-wall" className="relative bg-paper-50 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-[17px] uppercase tracking-[0.3em] text-green-500">
            Prayer Wall
          </p>
          <h2 className="mt-4 font-display text-[41px] text-ink-950 sm:text-[53px]">
            Carry one another
          </h2>
          <p className="mt-4 flex items-start gap-2 text-[19px] leading-relaxed text-slate-600">
            <Lock className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
            Your requests are saved privately on this device only. Check the
            box below to also send it directly to the alumni desk so it can
            be lifted at the next family meeting.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass-card mb-10 space-y-4 rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-[1fr_2fr]">
            <label className="block">
              <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                Name (optional)
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Anonymous"
                className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                Your prayer request
              </span>
              <textarea
                required
                rows={1}
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-center gap-2 text-[15px] text-slate-600">
              <input
                type="checkbox"
                checked={shareWithFellowship}
                onChange={(e) => setShareWithFellowship(e.target.checked)}
                className="h-4 w-4 accent-green-700"
              />
              Also send this to the alumni desk
            </label>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-green-700 px-6 py-2.5 text-[15px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-600"
            >
              <Send className="h-3.5 w-3.5" />
              Add to the wall
            </button>
          </div>
        </form>

        {entries.length === 0 ? (
          <p className="glass-card rounded-2xl p-10 text-center text-[19px] text-slate-600">
            <HandHeart className="mx-auto mb-3 h-6 w-6 text-green-700" />
            Nothing here yet. Whatever you carry, write it down and bring it
            to the Lord.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <AnimatePresence>
              {entries.map((e) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="glass-card group relative rounded-2xl p-5"
                >
                  <button
                    onClick={() => remove(e.id)}
                    aria-label="Remove entry"
                    className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 opacity-0 transition-opacity hover:bg-black/5 hover:text-red-700 group-hover:opacity-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <p className="pr-6 text-[19px] leading-relaxed text-ink-800">
                    {e.request}
                  </p>
                  <p className="mt-3 font-mono text-[15px] uppercase tracking-[0.15em] text-green-600">
                    {e.name}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
