"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  BookOpen,
  Calendar,
  GraduationCap,
  Users,
  Music,
  Flame,
  Users2,
  Award,
  Heart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { ProgramTicker } from "./program-ticker";

type NavLink = { id: string; label: string; icon: typeof Quote; blurb: string };
type NavGroup = { id: string; label: string; links: NavLink[] };

const groups: NavGroup[] = [
  {
    id: "about",
    label: "About",
    links: [
      { id: "theme", label: "The Theme", icon: Quote, blurb: "Rebuilding the Broken Walls" },
      { id: "welcome", label: "Welcome", icon: BookOpen, blurb: "Chairman & President's letters" },
    ],
  },
  {
    id: "program",
    label: "Program",
    links: [
      { id: "schedule", label: "Schedule", icon: Calendar, blurb: "The full order of service" },
      { id: "study", label: "Bible Study", icon: GraduationCap, blurb: "Dealing with detractors" },
    ],
  },
  {
    id: "community",
    label: "Community",
    links: [
      { id: "directory", label: "Alumni Directory", icon: Users, blurb: "Every set, since 1998" },
      { id: "family", label: "The Family", icon: Users2, blurb: "Leadership & fellowship photos" },
      { id: "hymns", label: "Hymns & Anthems", icon: Music, blurb: "Songs we rebuild with" },
      { id: "prayer-wall", label: "Prayer Wall", icon: Flame, blurb: "Carry one another" },
    ],
  },
];

export function Nav({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const goHome = () => {
    setOpenGroup(null);
    setMobileOpen(false);
    onNavigate("home");
  };

  const pick = (id: string) => {
    setOpenGroup(null);
    setMobileOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goGive = () => {
    setOpenGroup(null);
    setMobileOpen(false);
    document.getElementById("give")?.scrollIntoView({ behavior: "smooth" });
  };

  const isGroupActive = (g: NavGroup) => g.links.some((l) => l.id === active);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/70 py-2.5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.85),0_12px_40px_-10px_rgba(15,81,50,0.08)] border-b border-green-900/8"
          : "bg-white/85 py-4 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.02)] border-b border-green-900/5"
      } backdrop-blur-[26px]`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <button onClick={goHome} className="group flex items-center gap-3.5">
            <span className="flex -space-x-2.5 items-center">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-green-900/10 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image src="/sucf-icon.png" alt="SUCF emblem" width={30} height={30} className="object-contain" />
              </span>
              <span className="relative z-10 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-green-500/15 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/nmti-logo.png"
                  alt="National Metallurgical Training Institute seal"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </span>
            </span>
            <span className="flex flex-col items-start leading-none">
              <span className="font-display text-[19px] font-extrabold uppercase tracking-tight text-green-700 transition-colors group-hover:text-green-600">
                SUCF
              </span>
              <span className="mt-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-green-500">
                MTI Onitsha
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            <nav className="flex items-center gap-1 rounded-2xl border border-white/50 bg-white/40 p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              {groups.map((g) => {
                const groupActive = isGroupActive(g);
                const isOpen = openGroup === g.id;
                return (
                  <div key={g.id} className="relative">
                    <button
                      onClick={() => setOpenGroup(isOpen ? null : g.id)}
                      className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-semibold tracking-tight transition-all duration-300 ${
                        groupActive || isOpen
                          ? "bg-white/75 text-green-700"
                          : "text-ink-800/70 hover:bg-white/75 hover:text-green-700"
                      }`}
                    >
                      {g.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="glass-card absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl !bg-white p-2"
                        >
                          {g.links.map((l) => {
                            const Icon = l.icon;
                            const linkActive = active === l.id;
                            return (
                              <button
                                key={l.id}
                                onClick={() => pick(l.id)}
                                className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                                  linkActive
                                    ? "bg-green-100 text-green-700"
                                    : "hover:bg-paper-100"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 rounded-lg p-1.5 ${
                                    linkActive ? "bg-green-700 text-white" : "bg-paper-200 text-green-700"
                                  }`}
                                >
                                  <Icon className="h-3.5 w-3.5" />
                                </span>
                                <span>
                                  <span className="block text-[14px] font-semibold text-ink-800">
                                    {l.label}
                                  </span>
                                  <span className="block text-[12px] text-slate-400">
                                    {l.blurb}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
            <button
              onClick={() => pick("scholarship")}
              className={`flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all ${
                active === "scholarship"
                  ? "bg-gradient-to-r from-green-500 to-amber-700 text-white shadow-md"
                  : "border border-green-500/25 text-green-600 hover:bg-amber-50"
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              <span>Scholarship</span>
            </button>
            <button
              onClick={() => goGive()}
              className="ml-1 flex items-center gap-1.5 rounded-2xl bg-ink-950 px-4.5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lg"
            >
              <Heart className="h-3.5 w-3.5 fill-current text-green-500" />
              <span>Give Online</span>
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-black/5 hover:text-green-700"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* utility ticker row */}
      <div className="hidden border-t border-green-900/5 bg-white/50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-1 lg:px-10">
          <ProgramTicker />
          <p className="hidden shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 xl:block">
            Think SUCF <span className="text-green-500">&middot; Pray SUCF &middot; Act SUCF</span>
          </p>
        </div>
      </div>

      {/* mobile drawer: flattened list, grouped */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/20 bg-white/95 shadow-xl lg:hidden"
          >
            <div className="max-h-[70vh] space-y-4 overflow-y-auto px-4 pb-6 pt-4">
              {groups.map((g) => (
                <div key={g.id}>
                  <p className="mb-1.5 px-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {g.label}
                  </p>
                  <div className="space-y-1">
                    {g.links.map((l) => {
                      const Icon = l.icon;
                      const linkActive = active === l.id;
                      return (
                        <button
                          key={l.id}
                          onClick={() => pick(l.id)}
                          className={`flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-[14px] font-semibold tracking-tight transition-all ${
                            linkActive
                              ? "border-l-4 border-green-700 bg-green-100/60 pl-3 text-green-700"
                              : "text-slate-600 hover:bg-black/5 hover:text-green-700"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{l.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <button
                onClick={() => pick("scholarship")}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                  active === "scholarship"
                    ? "bg-gradient-to-r from-green-500 to-amber-700 text-white shadow-md"
                    : "border border-green-500/25 text-green-600"
                }`}
              >
                <Award className="h-4 w-4" />
                <span>Scholarship</span>
              </button>
              <button
                onClick={() => goGive()}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink-950 py-3 text-sm font-extrabold text-white shadow-md"
              >
                <Heart className="h-4 w-4 fill-current text-green-500" />
                <span>Give Online</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
