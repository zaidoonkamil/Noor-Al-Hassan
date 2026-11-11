"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { IconClose, IconGlobe, IconMenu } from "./icons";
import { ease } from "./motion";

export default function Header({ t, locale }: { t: Dictionary; locale: Locale }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 30);
    setHidden(v > prev && v > 500 && !open);
  });

  // highlight current section
  useEffect(() => {
    const ids = t.nav.links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [t.nav.links]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const other = locale === "ar" ? "en" : "ar";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.5, ease, delay: hidden ? 0 : 0.1 }}
        className="fixed inset-x-0 top-0 z-[65] px-3 pt-3 sm:px-5"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : "border border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-3" aria-label={t.brand.full}>
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={50}
              priority
              className="h-11 w-auto transition-transform duration-700 group-hover:rotate-[360deg]"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-extrabold text-paper sm:text-lg">{t.brand.name}</span>
              <span className="block text-[11px] text-mist">{t.brand.tagline}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href ? "text-paper" : "text-mist hover:text-paper"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`/${other}`}
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-paper transition-colors hover:border-brand-sky/50 hover:bg-white/5"
            >
              <IconGlobe className="h-4 w-4" />
              {t.nav.switchLabel}
            </Link>
            <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              {t.nav.cta}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper lg:hidden"
              aria-label={t.nav.menu}
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-night-900/95 backdrop-blur-2xl lg:hidden"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative flex items-center justify-between p-6">
              <Image src="/logo.png" alt="" width={44} height={50} className="h-11 w-auto" />
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper"
                aria-label={t.nav.close}
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <nav className="relative flex flex-1 flex-col justify-center gap-2 px-8">
              {t.nav.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.6, ease }}
                  className="group flex items-baseline gap-4 border-b border-white/5 py-4 font-display text-3xl font-bold text-paper"
                >
                  <span className="text-sm text-brand-amber" dir="ltr">
                    0{i + 1}
                  </span>
                  <span className="transition-colors group-hover:text-gradient">{l.label}</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease }}
                className="btn-primary mt-8 self-start"
              >
                {t.nav.cta}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
