"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { Dictionary } from "@/lib/content";
import { company } from "@/lib/i18n";
import { IconArrow, IconPhone, IconPin, IconWhatsapp } from "./icons";
import { scrollToTarget } from "./Effects";

export default function Footer({ t }: { t: Dictionary }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "0%"]);
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/10 bg-night-900 pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/60 to-transparent" />
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={56} height={64} className="h-14 w-auto" />
            <div>
              <p className="font-display text-xl font-extrabold">{t.brand.full}</p>
              <p className="text-xs text-mist">{t.brand.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-7 text-mist">{t.footer.about}</p>
        </div>

        <div>
          <h4 className="font-display font-bold">{t.footer.quick}</h4>
          <ul className="mt-5 space-y-3">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group inline-flex items-center gap-2 text-mist transition-colors hover:text-paper">
                  <span className="h-px w-0 bg-brand-amber transition-all duration-300 group-hover:w-4" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold">{t.footer.contact}</h4>
          <ul className="mt-5 space-y-4 text-sm text-mist">
            {company.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                  <IconPhone className="h-4 w-4 text-brand-amber" />
                  <span dir="ltr">{p.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-paper"
              >
                <IconWhatsapp className="h-4 w-4 text-brand-amber" />
                WhatsApp
              </a>
            </li>
            <li className="flex gap-3 leading-6">
              <IconPin className="mt-1 h-4 w-4 shrink-0 text-brand-amber" />
              {t.email.side.addressValue}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-16 select-none overflow-hidden" aria-hidden dir="ltr">
        <motion.p
          style={{ x }}
          className="whitespace-nowrap text-center font-display text-[10vw] font-black leading-[0.9] text-transparent [-webkit-text-stroke:1px_rgba(154,167,199,0.18)]"
        >
          NOOR AL HASSAN
        </motion.p>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night-900 to-transparent" />
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-mist sm:flex-row">
          <p>
            © {year} {t.footer.legal}. {t.footer.rights}.
          </p>
          <button
            onClick={() => scrollToTarget(0)}
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-brand-amber/50 hover:text-paper"
          >
            {t.footer.top}
            <IconArrow className="h-3.5 w-3.5 -rotate-90 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
