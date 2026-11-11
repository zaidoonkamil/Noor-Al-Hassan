"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { Dictionary } from "@/lib/content";
import { IconPin } from "./icons";
import { Reveal, SplitWords } from "./motion";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#9aa7c7", "#eef2fb"]);
  return (
    <motion.span style={{ opacity, color }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

export default function About({ t }: { t: Dictionary }) {
  const section = useRef<HTMLElement>(null);
  const para = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const rot = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  const { scrollYProgress: p } = useScroll({ target: para, offset: ["start 85%", "end 45%"] });
  const words = t.about.reveal.split(" ");

  return (
    <section ref={section} id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute end-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple/15 blur-[150px]" />
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* collage */}
        <div className="relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[540px]">
          <motion.div style={{ y: y1 }} className="absolute start-0 top-0 h-[62%] w-[60%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/gift-set.webp" alt="" fill sizes="(max-width:768px) 60vw, 320px" className="object-cover transition-transform duration-[1.5s] hover:scale-110" />
          </motion.div>
          <motion.div style={{ y: y2, rotate: rot }} className="absolute end-0 top-[12%] h-[48%] w-[46%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/notebooks-spiral.webp" alt="" fill sizes="(max-width:768px) 46vw, 240px" className="object-cover" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute bottom-0 end-[14%] h-[44%] w-[52%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="/images/fountain-kit.webp" alt="" fill sizes="(max-width:768px) 52vw, 270px" className="object-cover" />
          </motion.div>

          <Reveal delay={0.3} className="absolute bottom-[8%] start-[-2%] z-10">
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-amber to-brand-orange text-night">
                <IconPin className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-bold">{t.about.badge}</span>
            </div>
          </Reveal>

          <div className="absolute -start-6 -top-6 -z-10 h-32 w-32 rounded-full border border-dashed border-brand-amber/40" />
        </div>

        {/* text */}
        <div>
          <Reveal>
            <span className="eyebrow">{t.about.eyebrow}</span>
          </Reveal>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.3] sm:text-4xl lg:text-5xl">
            <SplitWords text={t.about.title} />
          </h2>

          <p ref={para} className="mt-8 text-lg leading-9 sm:text-xl sm:leading-10">
            {words.map((w, i) => (
              <Word key={i} word={w} progress={p} range={[i / words.length, (i + 1) / words.length]} />
            ))}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.about.points.map((pt, i) => (
              <Reveal key={pt.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-sky/40 hover:bg-white/[0.06]">
                  <span className="font-display text-xs font-bold text-brand-amber" dir="ltr">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold">{pt.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-mist">{pt.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
