import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Theme } from "@/components/sections/theme";
import { Welcome } from "@/components/sections/welcome";
import { Schedule } from "@/components/sections/schedule";
import { BibleStudy } from "@/components/sections/bible-study";
import { Directory } from "@/components/sections/directory";
import { Scholarship } from "@/components/sections/scholarship";
import { Hymns } from "@/components/sections/hymns";
import { PrayerWall } from "@/components/sections/prayer-wall";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Theme />
        <Welcome />
        <Schedule />
        <BibleStudy />
        <Directory />
        <Scholarship />
        <Hymns />
        <PrayerWall />
      </main>
      <Footer />
    </>
  );
}
