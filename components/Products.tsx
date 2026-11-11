"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import type { Dictionary } from "@/lib/content";
import { IconArrow } from "./icons";
import { SectionHeading, ease } from "./motion";

const layout = [
  "lg:col-span-2 lg:row-span-2 min-h-[420px] lg:min-h-0",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
];

type Item = Dictionary["products"]["items"][number];

function Card({ item, index, more, big }: { item: Item; index: number; more: string; big: boolean }) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(90,167,232,0.22), transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px * 100);
    my.set(py * 100);
    rx.set((0.5 - py) * 8);
    ry.set((px - 0.5) * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease }}
      className={`lg:[perspective:1000px] ${layout[index]}`}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry }}
        data-cursor
        className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-night-800 lg:[transform-style:preserve-3d]"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={big ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 100vw, 25vw"}
          className="object-cover opacity-80 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-transparent" />
        <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />

        <span className="absolute end-5 top-5 font-display text-5xl font-black text-white/10 transition-colors duration-500 group-hover:text-brand-amber/40" dir="ltr">
          0{index + 1}
        </span>

        <div className="relative p-6 sm:p-7 lg:[transform:translateZ(40px)]">
          <h3 className={`font-display font-extrabold ${big ? "text-2xl sm:text-3xl" : "text-xl"}`}>{item.title}</h3>
          <p className={`mt-2 leading-7 text-mist ${big ? "max-w-md text-base" : "text-sm"}`}>{item.desc}</p>
          <a
            href="#contact"
            className="mt-4 inline-flex translate-y-2 items-center gap-2 text-sm font-bold text-brand-amber opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {more}
            <IconArrow className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-sky via-brand-purple to-brand-amber transition-transform duration-700 group-hover:scale-x-100 rtl:origin-right" />
      </motion.div>
    </motion.div>
  );
}

export default function Products({ t }: { t: Dictionary }) {
  return (
    <section id="products" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute start-0 top-0 -z-10 h-[500px] w-[500px] bg-[radial-gradient(closest-side,rgba(47,111,184,0.24),transparent)]" />
      <div className="container-x">
        <SectionHeading eyebrow={t.products.eyebrow} title={t.products.title} desc={t.products.desc} />
        <div className="mt-16 grid auto-rows-[minmax(280px,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.items.map((item, i) => (
            <Card key={item.key} item={item} index={i} more={t.products.more} big={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
