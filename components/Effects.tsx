"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { ease } from "./motion";
import { IconWhatsapp } from "./icons";

/* ---------------- Smooth scrolling ---------------- */
export function SmoothScroll() {
  useEffect(() => {
    // touch devices already scroll natively & smoothly — skip Lenis there
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -80 } });
    let id = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return null;
}

export function scrollToTarget(target: string | number) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(target as never, { offset: typeof target === "string" ? -80 : 0 });
  else if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

/* ---------------- Preloader ---------------- */
export function Preloader({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const total = 1100;
    let id = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) id = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night-900"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 grid-bg opacity-60" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -25 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-brand-blue/30 blur-3xl" />
            <Image src="/logo.png" alt="" width={140} height={160} priority className="h-32 w-auto drop-shadow-[0_0_30px_rgba(90,167,232,0.45)]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 font-display text-sm tracking-wide text-mist"
          >
            {text}
          </motion.p>
          <div className="mt-5 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full"
              style={{ width: `${n}%`, background: "linear-gradient(90deg,#2f6fb8,#7b4fa6,#f4b54f)" }}
            />
          </div>
          <span className="mt-3 font-display text-xs tabular-nums text-mist" dir="ltr">
            {n}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Custom cursor ---------------- */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a, button, [data-cursor], input, textarea, select, label"));
    };
    const d = () => setDown(true);
    const u = () => setDown(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", d);
    window.addEventListener("pointerup", u);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", d);
      window.removeEventListener("pointerup", u);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-sky/60 mix-blend-screen"
        style={{ x: rx, y: ry }}
        animate={{
          width: hover ? 64 : 36,
          height: hover ? 64 : 36,
          backgroundColor: hover ? "rgba(90,167,232,0.12)" : "rgba(90,167,232,0)",
          scale: down ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </>
  );
}

/* ---------------- Scroll progress ---------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX, background: "linear-gradient(90deg,#5aa7e8,#7b4fa6,#f4b54f)" }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-[0%] rtl:origin-[100%]"
    />
  );
}

/* ---------------- WhatsApp float ---------------- */
export function WhatsAppFloat({ phone, message, label }: { phone: string; message: string; label: string }) {
  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-6px_rgba(37,211,102,0.7)]"
    >
      <span className="absolute inset-0 animate-ping2 rounded-full bg-[#25D366]" />
      <IconWhatsapp className="relative h-7 w-7" />
    </motion.a>
  );
}
