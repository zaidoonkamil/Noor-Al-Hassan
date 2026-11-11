"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/content";
import { company } from "@/lib/i18n";
import { IconArrow, IconCheck, IconClock, IconPhone, IconPin, IconWhatsapp } from "./icons";
import { Reveal, SplitWords, ease } from "./motion";

const wa = (text: string) => `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

function PhoneBadge() {
  return (
    <div className="relative mx-auto flex h-28 w-28 items-center justify-center" aria-hidden>
      <span className="absolute inset-0 animate-ping2 rounded-full bg-[#25D366]/40" />
      <span className="absolute inset-0 animate-ping2 rounded-full bg-[#25D366]/30 [animation-delay:1.1s]" />
      <motion.span
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_20px_50px_-10px_rgba(37,211,102,0.7)]"
      >
        <IconWhatsapp className="h-12 w-12" />
      </motion.span>
    </div>
  );
}

export default function ContactSection({ t }: { t: Dictionary }) {
  const e = t.email;

  const info = [
    {
      icon: IconPhone,
      label: e.side.phone,
      content: (
        <span className="flex flex-col gap-1" dir="ltr">
          {company.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="w-fit transition-colors hover:text-brand-amber rtl:self-end">
              {p.display}
            </a>
          ))}
        </span>
      ),
    },
    {
      icon: IconWhatsapp,
      label: e.side.whatsapp,
      content: (
        <a href={wa(t.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-amber">
          {e.side.whatsappText}
        </a>
      ),
    },
    { icon: IconPin, label: e.side.address, content: <span>{e.side.addressValue}</span> },
    { icon: IconClock, label: e.side.hours, content: <span>{e.side.hoursValue}</span> },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute left-1/2 top-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#25D366]/10 blur-[160px]" />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <PhoneBadge />
          <Reveal>
            <span className="eyebrow mt-8">{e.eyebrow}</span>
          </Reveal>
          <h2 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <SplitWords text={e.title} className="text-gradient" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-8 text-mist sm:text-lg">{e.desc}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="border-glow grid overflow-hidden rounded-[2.25rem] bg-night-800/80 backdrop-blur-xl lg:grid-cols-[1fr_1.5fr]">
            {/* info side */}
            <aside className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-blue/70 to-brand-purple p-8 sm:p-10">
              <div className="absolute -bottom-24 -end-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
              <div className="absolute -top-10 end-10 h-32 w-32 rounded-full bg-brand-amber/20 blur-2xl" />
              <h3 className="relative font-display text-2xl font-bold">{e.side.title}</h3>
              <ul className="relative mt-8 space-y-7">
                {info.map(({ icon: Icon, label, content }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-sm leading-7">
                      <p className="text-xs font-semibold text-white/60">{label}</p>
                      <div className="mt-0.5 font-medium text-white">{content}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 block overflow-hidden rounded-2xl border border-white/15"
              >
                <iframe
                  title="map"
                  src={company.mapsEmbed}
                  loading="lazy"
                  className="pointer-events-none h-44 w-full grayscale invert-[0.9] hue-rotate-180 transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:hue-rotate-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="absolute bottom-3 start-3 rounded-full bg-night/80 px-3 py-1.5 text-xs font-bold backdrop-blur">
                  {e.side.maps}
                </span>
              </a>
            </aside>

            {/* WhatsApp chat preview */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 border-b border-white/10 bg-[#0b141a]/80 px-6 py-4 sm:px-8">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-2">
                  <Image src="/logo.png" alt="" width={36} height={40} className="h-full w-auto" />
                  <span className="absolute bottom-0 end-0 h-3 w-3 rounded-full border-2 border-[#0b141a] bg-[#25D366]" />
                </span>
                <div>
                  <p className="font-display font-bold">{t.brand.full}</p>
                  <p className="text-xs text-[#25D366]">{e.chat.status}</p>
                </div>
                <IconWhatsapp className="ms-auto h-6 w-6 text-[#25D366]" />
              </div>

              <div className="relative flex flex-1 flex-col gap-4 bg-[radial-gradient(circle_at_20%_20%,rgba(37,211,102,0.06),transparent_50%)] p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease }}
                  className="max-w-[85%] self-start whitespace-pre-line rounded-2xl rounded-ss-sm bg-[#1f2c34] px-4 py-3 text-sm leading-7 shadow"
                >
                  {e.chat.greeting}
                  <span className="mt-1 block text-end text-[10px] text-white/40" dir="ltr">
                    09:00
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-2 text-xs font-semibold text-mist"
                >
                  {e.chat.pick}
                </motion.p>

                <motion.div
                  initial="h"
                  whileInView="s"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.08, delayChildren: 0.7 }}
                  className="flex flex-wrap gap-2.5"
                >
                  {e.subjects.map((s) => (
                    <motion.a
                      key={s}
                      href={wa(`${t.whatsappMsg}\n${s}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={{ h: { opacity: 0, y: 12 }, s: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -3 }}
                      className="group flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/[0.07] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[#25D366] hover:bg-[#25D366]/20"
                    >
                      <IconCheck className="h-4 w-4 text-[#25D366]" />
                      {s}
                    </motion.a>
                  ))}
                </motion.div>

                <div className="mt-auto pt-6">
                  <motion.a
                    href={wa(t.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-7 py-4 font-display text-base font-bold text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.7)]"
                  >
                    <IconWhatsapp className="h-6 w-6" />
                    {e.chat.start}
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
