"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { Dictionary } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { featureIcons } from "./icons";
import { Counter, Reveal, SectionHeading, ease } from "./motion";

export function Stats({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section className="relative py-10">
      <div className="container-x">
        <Reveal>
          <div className="border-glow grid grid-cols-2 gap-y-10 rounded-[2rem] bg-night-800/70 px-6 py-10 backdrop-blur lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i > 0 ? "lg:border-s lg:border-white/10" : ""}`}>
                <div className="font-display text-4xl font-black text-gradient sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} locale={locale} />
                </div>
                <p className="mt-2 text-sm text-mist">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs({ t }: { t: Dictionary }) {
  return (
    <section id="why" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute end-0 top-1/3 -z-10 h-[460px] w-[460px] bg-[radial-gradient(closest-side,rgba(244,181,79,0.16),transparent)]" />
      <div className="container-x">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((it, i) => {
            const Icon = featureIcons[it.icon as keyof typeof featureIcons];
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7"
              >
                <div className="absolute -end-16 -top-16 h-40 w-40 rounded-full bg-brand-blue/0 blur-3xl transition-colors duration-700 group-hover:bg-brand-blue/30" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-[0_10px_30px_-10px_rgba(123,79,166,0.8)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold">{it.title}</h3>
                <p className="relative mt-3 leading-7 text-mist">{it.desc}</p>
                <span className="absolute bottom-5 end-6 font-display text-6xl font-black text-white/[0.04]" dir="ltr">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process({ t }: { t: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-28 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
        <div ref={ref} className="relative mt-20">
          {/* connecting line (desktop horizontal, mobile vertical) */}
          <div className="absolute start-7 top-0 h-full w-[2px] bg-white/10 lg:start-0 lg:top-7 lg:h-[2px] lg:w-full">
            <motion.div
              style={{ scaleY: scale }}
              className="h-full w-full origin-top bg-gradient-to-b from-brand-sky via-brand-purple to-brand-amber lg:hidden"
            />
            <motion.div
              style={{ scaleX: scale }}
              className="hidden h-full w-full origin-left bg-gradient-to-r from-brand-sky via-brand-purple to-brand-amber rtl:origin-right lg:block"
            />
          </div>

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {t.process.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.15} className="relative flex gap-6 lg:block">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-night-800 font-display text-lg font-black text-brand-amber shadow-[0_0_0_8px_#050a1c]">
                  <span dir="ltr">0{i + 1}</span>
                </div>
                <div className="lg:mt-7">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-7 text-mist">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Sectors({ t }: { t: Dictionary }) {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-deep/60 via-night-800 to-brand-purple/40 px-6 py-16 sm:px-12">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <Image
            src="/logo.png"
            alt=""
            width={420}
            height={480}
            className="pointer-events-none absolute -end-20 -top-10 w-80 animate-spin-slower opacity-[0.07] sm:w-[420px]"
          />
          <div className="relative">
            <SectionHeading eyebrow={t.sectors.eyebrow} title={t.sectors.title} />
            <motion.ul
              initial="h"
              whileInView="s"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ staggerChildren: 0.07 }}
              className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
            >
              {t.sectors.items.map((s) => (
                <motion.li
                  key={s}
                  variants={{ h: { opacity: 0, y: 20, scale: 0.8 }, s: { opacity: 1, y: 0, scale: 1, transition: { ease, duration: 0.6 } } }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="cursor-default rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 font-display text-sm font-semibold backdrop-blur transition-colors hover:border-brand-amber/60 hover:bg-brand-amber/10 hover:text-brand-amber sm:text-base"
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
