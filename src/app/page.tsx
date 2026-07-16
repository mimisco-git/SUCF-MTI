"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Theme } from "@/components/sections/theme";
import { Welcome } from "@/components/sections/welcome";
import { Schedule } from "@/components/sections/schedule";
import { BibleStudy } from "@/components/sections/bible-study";
import { Directory } from "@/components/sections/directory";
import { Family } from "@/components/sections/family";
import { Scholarship } from "@/components/sections/scholarship";
import { Hymns } from "@/components/sections/hymns";
import { PrayerWall } from "@/components/sections/prayer-wall";
import { Footer } from "@/components/sections/footer";

const sectionMap: Record<string, React.ComponentType> = {
  theme: Theme,
  welcome: Welcome,
  schedule: Schedule,
  study: BibleStudy,
  directory: Directory,
  family: Family,
  scholarship: Scholarship,
  hymns: Hymns,
  "prayer-wall": PrayerWall,
};

export default function Home() {
  const [active, setActive] = useState("home");
  const ActiveSection = sectionMap[active];

  return (
    <>
      <Nav active={active} onNavigate={setActive} />
      <main id="top">
        <AnimatePresence mode="wait">
          {active === "home" || !ActiveSection ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Hero onNavigate={setActive} />
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ActiveSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
