"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, type ComponentType, type SVGProps } from "react";
import type { Dictionary } from "@/lib/content";
import { ArtClip, ArtNotebook, ArtPen, ArtPencil, ArtRuler, ArtScissors, IconArrow } from "./icons";
import { Magnetic, SplitWords, ease } from "./motion";
import ParticleField from "./ParticleField";

const INTRO = 1.3; // wait for preloader

type Orbiter = { Art: ComponentType<SVGProps<SVGSVGElement>>; angle: number; radius: number; rot: number; size: string; depth: number };

const orbiters: Orbiter[] = [
  { Art: ArtPencil, angle: -30, radius: 54, rot: -35, size: "w-28 sm:w-36", depth: 40 },
  { Art: ArtPen, angle: 200, radius: 52, rot: 25, size: "w-24 sm:w-32", depth: 25 },
  { Art: ArtNotebook, angle: 140, radius: 50, rot: -12, size: "w-12 sm:w-16", depth: 55 },
  { Art: ArtClip, angle: 40, radius: 52, rot: 30, size: "w-6 sm:w-8", depth: 30 },
  { Art: ArtRuler, angle: 95, radius: 56, rot: -8, size: "w-24 sm:w-32", depth: 45 },
  { Art: ArtScissors, angle: 255, radius: 47, rot: 15, size: "w-10 sm:w-14", depth: 35 },
];

function Floating({ o, mx, my, i }: { o: Orbiter; mx: MotionValue<number>; my: MotionValue<number>; i: number }) {
  const x = useTransform(mx, (v: number) => v * o.depth);
  const y = useTransform(my, (v: number) => v * o.depth);
  const rad = (o.angle * Math.PI) / 180;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        x,
        y,
        marginLeft: `${Math.cos(rad) * o.radius}%`,
        marginTop: `${Math.sin(rad) * o.radius}%`,
      }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: INTRO + 0.5 + i * 0.1, duration: 1, ease }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div className="animate-float" style={{ animationDelay: `${i * -1.2}s`, animationDuration: `${6 + i}s` }}>
          <o.Art className={`${o.size} h-auto lg:drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)]`} style={{ transform: `rotate(${o.rot}deg)` }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero({ t }: { t: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(smy, [-1, 1], [10, -10]);
  const rotY = useTransform(smx, [-1, 1], [-12, 12]);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  return (
    <section ref={ref} id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 lg:pt-28">
      {/* ---------- background ---------- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0d1840_0%,#050a1c_60%)]" />
        <div className="absolute -start-40 top-[-10%] h-[620px] w-[620px] animate-aurora bg-[radial-gradient(closest-side,rgba(47,111,184,0.48),transparent)]" />
        <div
          className="absolute -end-40 top-[20%] h-[560px] w-[560px] animate-aurora bg-[radial-gradient(closest-side,rgba(123,79,166,0.48),transparent)]"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute bottom-[-20%] start-1/3 h-[420px] w-[420px] animate-aurora bg-[radial-gradient(closest-side,rgba(244,181,79,0.24),transparent)]"
          style={{ animationDelay: "-14s" }}
        />
        <div className="absolute inset-0 grid-bg" />
        <ParticleField />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        {/* ---------- text ---------- */}
        <motion.div style={{ y: contentY, opacity: contentO }} className="relative z-10 text-center lg:text-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO, duration: 0.8, ease }}
            className="eyebrow"
          >
            {t.hero.badge}
          </motion.span>

          <h1 className="mt-7 font-display font-black leading-[1.15]">
            <span className="block text-5xl text-gradient-anim sm:text-7xl xl:text-8xl">
              <SplitWords text={t.hero.titleA} delay={INTRO + 0.1} animateOnMount stagger={0.1} />
            </span>
            <span className="mt-3 block text-3xl text-paper sm:text-5xl xl:text-[3.4rem]">
              <SplitWords text={t.hero.titleB} delay={INTRO + 0.35} animateOnMount />
            </span>
            <span className="mt-1 block text-3xl text-paper/70 sm:text-5xl xl:text-[3.4rem]">
              <SplitWords text={t.hero.titleC} delay={INTRO + 0.55} animateOnMount />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO + 0.8, duration: 0.9, ease }}
            className="mx-auto mt-7 max-w-xl text-base leading-8 text-mist sm:text-lg lg:mx-0"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: INTRO + 1, duration: 0.9, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Magnetic>
              <a href="#products" className="btn-primary group">
                {t.hero.primary}
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost">
                {t.hero.secondary}
              </a>
            </Magnetic>
          </motion.div>

          <motion.ul
            initial="h"
            animate="s"
            transition={{ staggerChildren: 0.08, delayChildren: INTRO + 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {t.hero.chips.map((c) => (
              <motion.li
                key={c}
                variants={{ h: { opacity: 0, scale: 0.6 }, s: { opacity: 1, scale: 1 } }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-mist"
              >
                {c}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---------- orb ---------- */}
        <motion.div style={{ scale: orbScale, y: orbY }} className="relative mx-auto aspect-square w-full max-w-[540px] [perspective:1200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: INTRO - 0.2, duration: 1.4, ease }}
            className="absolute inset-0"
          >
            {/* rings */}
            <div className="absolute inset-[6%] animate-spin-slow rounded-full border border-dashed border-brand-sky/25" />
            <div className="absolute inset-[16%] animate-spin-slower rounded-full border border-brand-purple/30 [animation-direction:reverse]" />
            <div
              className="absolute inset-[24%] animate-spin-slow rounded-full opacity-70"
              style={{
                background: "conic-gradient(from 0deg, transparent 0 70%, rgba(244,181,79,.55) 85%, transparent 100%)",
                mask: "radial-gradient(circle, transparent 66%, #000 67%, #000 69%, transparent 70%)",
                WebkitMask: "radial-gradient(circle, transparent 66%, #000 67%, #000 69%, transparent 70%)",
              }}
            />
            <div className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(47,111,184,0.45),rgba(123,79,166,0.18)_55%,transparent_70%)] blur-2xl" />

            {/* logo with 3D tilt */}
            <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="absolute inset-[27%] [transform-style:preserve-3d]">
              <div className="relative h-full w-full animate-float">
                <Image
                  src="/logo.png"
                  alt="Noor Al Hassan logo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-contain lg:drop-shadow-[0_25px_45px_rgba(47,111,184,0.55)]"
                />
              </div>
            </motion.div>
          </motion.div>

          {orbiters.map((o, i) => (
            <Floating key={i} o={o} mx={smx} my={smy} i={i} />
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: INTRO + 1.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-widest text-mist sm:flex"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <motion.span
            className="h-2 w-1 rounded-full bg-brand-amber"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </span>
        {t.hero.scroll}
      </motion.a>
    </section>
  );
}
