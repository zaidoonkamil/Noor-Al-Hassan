"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/content";
import { Reveal, SplitWords } from "./motion";

/** Vertical scroll drives a horizontal gallery while the section is pinned */
export default function Showcase({ t, rtl }: { t: Dictionary; rtl: boolean }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, rtl ? distance : -distance]);
  const bar = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section ref={section} id="showcase" className="relative" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#0d1840_0%,#050a1c_65%)]" />
        <span className="text-outline pointer-events-none absolute inset-x-0 top-[8%] select-none whitespace-nowrap text-center font-display text-[18vw] font-black leading-none opacity-60">
          {t.showcase.eyebrow}
        </span>

        <div className="container-x relative mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <span className="eyebrow">{t.showcase.eyebrow}</span>
            </Reveal>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl">
              <SplitWords text={t.showcase.title} />
            </h2>
          </div>
          <p className="max-w-xs text-sm text-mist">{t.showcase.desc}</p>
        </div>

        <motion.div ref={track} style={{ x }} className="flex w-max gap-6 px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {t.showcase.items.map((it, i) => (
            <figure
              key={it.image}
              data-cursor
              className="group relative h-[46vh] w-[72vw] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-night-800 sm:h-[52vh] sm:w-[40vw] lg:w-[28vw]"
              style={{ marginTop: i % 2 ? "3rem" : 0 }}
            >
              <Image
                src={it.image}
                alt={it.label}
                fill
                sizes="(max-width:640px) 72vw, (max-width:1024px) 40vw, 28vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <span className="font-display text-lg font-bold">{it.label}</span>
                <span className="font-display text-sm text-brand-amber" dir="ltr">
                  {String(i + 1).padStart(2, "0")} / {String(t.showcase.items.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>

        <div className="container-x mt-10">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              style={{ scaleX: bar }}
              className="h-full origin-left bg-gradient-to-r from-brand-sky via-brand-purple to-brand-amber rtl:origin-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
