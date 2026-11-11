"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/content";
import { Reveal, SplitWords } from "./motion";

/**
 * Desktop: vertical scroll drives a horizontal gallery while the section is pinned.
 * Phones/tablets: a plain native swipe carousel (no pinning) — smooth and
 * immune to the mobile address-bar resizing the viewport while scrolling.
 */
export default function Showcase({ t, rtl }: { t: Dictionary; rtl: boolean }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!pinned) {
      setDistance(0);
      return;
    }
    let lastW = 0;
    const measure = () => {
      if (!track.current || window.innerWidth === lastW) return; // ignore height-only resizes
      lastW = window.innerWidth;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, rtl ? distance : -distance]);
  const bar = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section
      ref={section}
      id="showcase"
      className={`relative ${pinned ? "" : "py-24"}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-[100vh] flex-col justify-center overflow-hidden" : "relative overflow-hidden"}>
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

        <motion.div
          ref={track}
          style={pinned ? { x } : undefined}
          className={
            pinned
              ? "flex w-max gap-6 px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
              : "flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
          }
        >
          {t.showcase.items.map((it, i) => (
            <figure
              key={it.image}
              data-cursor
              className="group relative h-[360px] w-[78vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-night-800 sm:w-[45vw] lg:h-[52vh] lg:w-[28vw]"
              style={pinned ? { marginTop: i % 2 ? "3rem" : 0 } : undefined}
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

        <div className={`container-x mt-10 ${pinned ? "" : "hidden"}`}>
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
