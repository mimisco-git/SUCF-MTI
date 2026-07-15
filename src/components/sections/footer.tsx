import Image from "next/image";
import { event } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-5">
            <Image
              src="/nmti-logo.png"
              alt="National Metallurgical Training Institute seal"
              width={64}
              height={64}
              className="rounded-full ring-1 ring-white/15"
            />
            <div className="h-10 w-px bg-white/15" />
            <Image
              src="/sucf-logo.png"
              alt="SUCF emblem"
              width={110}
              height={59}
              className="h-14 w-auto"
            />
          </div>
          <p className="font-display text-xl italic text-white">
            &ldquo;Welcome home, brethren. Together, let us rebuild the broken
            walls.&rdquo;
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-500">
            Think SUCF, Pray SUCF, Act SUCF
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
            {event.fellowship} &middot; {event.institute}
          </p>
          <p className="font-mono text-[11px] text-white/40">
            {event.edition} &middot; {event.dates} &middot; {event.venue}
          </p>
        </div>
      </div>
    </footer>
  );
}
