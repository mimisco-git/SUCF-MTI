"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  BookOpen,
  Users,
  Music,
  Flame,
  GraduationCap,
  Award,
  Menu,
  X,
  Heart,
  Quote,
} from "lucide-react";
import { ProgramTicker } from "./program-ticker";

const navItems = [
  { href: "#top", id: "top", label: "Home", icon: Home },
  { href: "#theme", id: "theme", label: "Theme", icon: Quote },
  { href: "#welcome", id: "welcome", label: "Welcome", icon: BookOpen },
  { href: "#schedule", id: "schedule", label: "Schedule", icon: Calendar },
  { href: "#study", id: "study", label: "Bible Study", icon: GraduationCap },
  { href: "#directory", id: "directory", label: "Directory", icon: Users },
  {
    href: "#scholarship",
    id: "scholarship",
    label: "Scholarship",
    icon: Award,
    highlight: true,
  },
  { href: "#hymns", id: "hymns", label: "Hymns", icon: Music },
  { href: "#prayer-wall", id: "prayer-wall", label: "Prayer Wall", icon: Flame },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goGive = () => {
    setOpen(false);
    document.getElementById("give")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/70 py-2.5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.85),0_12px_40px_-10px_rgba(15,81,50,0.08)] border-b border-green-900/8"
          : "bg-white/85 py-4 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.02)] border-b border-green-900/5"
      } backdrop-blur-[26px]`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <a href="#top" className="group flex items-center gap-3.5">
            <span className="flex -space-x-2.5 items-center">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-green-900/10 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/sucf-icon.png"
                  alt="SUCF emblem"
                  width={30}
                  height={30}
                  className="object-contain"
                />
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
            <span className="flex flex-col leading-none">
              <span className="font-display text-[19px] font-extrabold uppercase tracking-tight text-green-700 transition-colors group-hover:text-green-600">
                SUCF
              </span>
              <span className="mt-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-green-500">
                MTI Onitsha
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-3.5 xl:flex">
            <nav className="flex items-center gap-1 rounded-2xl border border-white/50 bg-white/40 p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] tracking-tight transition-all duration-300 ${
                      isActive
                        ? item.highlight
                          ? "bg-gradient-to-r from-green-500 to-amber-700 font-bold text-white shadow-[0_4px_12px_rgba(217,119,6,0.3)]"
                          : "font-bold text-green-700"
                        : item.highlight
                          ? "border border-green-500/20 font-bold text-green-500 hover:bg-amber-50"
                          : "font-semibold text-ink-800/70 hover:bg-white/75 hover:text-green-700"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                    {isActive && !item.highlight && (
                      <motion.span
                        layoutId="activeTabIndicator"
                        className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-green-700"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
            <button
              onClick={goGive}
              className="flex items-center gap-1.5 rounded-2xl bg-ink-950 px-4.5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lg"
            >
              <Heart className="h-3.5 w-3.5 fill-current text-green-500" />
              <span>Give Online</span>
            </button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-black/5 hover:text-green-700"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* utility ticker row */}
      <div className="hidden border-t border-green-900/5 bg-white/50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-1.5 lg:px-10">
          <ProgramTicker />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Think SUCF <span className="text-green-500">&middot; Pray SUCF &middot; Act SUCF</span>
          </p>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/20 bg-white/90 shadow-xl xl:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-3">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => setOpen(false)}
                    className={`flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-[14px] font-semibold tracking-tight transition-all ${
                      isActive
                        ? item.highlight
                          ? "bg-gradient-to-r from-green-500 to-amber-700 font-bold text-white shadow-md"
                          : "border-l-4 border-green-700 bg-green-100/60 pl-3 font-bold text-green-700"
                        : item.highlight
                          ? "border border-green-500/20 bg-amber-50/40 font-bold text-green-500"
                          : "text-slate-600 hover:bg-black/5 hover:text-green-700"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </motion.a>
                );
              })}
              <button
                onClick={goGive}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-ink-950 py-3 text-sm font-extrabold text-white shadow-md"
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
