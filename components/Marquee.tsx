function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand-amber" aria-hidden>
      <path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
    </svg>
  );
}

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div dir="ltr" className="flex overflow-hidden">
      <div className={`flex shrink-0 items-center gap-8 pe-8 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[...row, ...row].map((it, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-2xl font-extrabold sm:text-4xl">{it}</span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee({ items }: { items: string[] }) {
  return (
    <section aria-hidden className="relative z-10 -my-6 overflow-hidden py-16">
      <div className="-rotate-2 scale-105 border-y border-white/10 bg-gradient-to-r from-brand-deep via-brand-purple to-brand-deep py-5 text-paper shadow-[0_20px_60px_-20px_rgba(123,79,166,0.6)]">
        <Track items={items} />
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[2.5deg] scale-105 border-y border-white/5 bg-night-800/90 py-4 text-paper/40 backdrop-blur">
        <Track items={items} reverse />
      </div>
    </section>
  );
}
