import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P): P => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...p,
});

export const IconArrow = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const IconSend = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 3 10 14" />
    <path d="M21 3 14.5 21l-4.5-7-7-4.5z" />
  </svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h10M4 17h16" />
  </svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconGlobe = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);
export const IconWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.2 8.2 0 1 1 6.94 3.83zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.21 3.72c1.57.68 2.19.74 2.97.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

/* feature icons */
export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);
export const IconTag = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z" />
    <circle cx="7.5" cy="7.5" r="1.5" />
  </svg>
);
export const IconTruck = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17.5" cy="17.5" r="1.8" />
  </svg>
);
export const IconLayers = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);
export const IconHandshake = (p: P) => (
  <svg {...base(p)}>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
    <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11l-3 3-1.5-1.5L14 9h-3L6 14" />
    <path d="m21 11-4-4h-3M3 11l4-4h4" />
  </svg>
);
export const IconHeadset = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" />
    <path d="M19 19a3 3 0 0 1-3 3h-3" />
  </svg>
);

export const featureIcons = {
  shield: IconShield,
  tag: IconTag,
  truck: IconTruck,
  layers: IconLayers,
  handshake: IconHandshake,
  headset: IconHeadset,
} as const;

/* ---------- Stationery illustrations (filled, colorful) ---------- */
export const ArtPencil = (p: P) => (
  <svg viewBox="0 0 120 24" width={120} height={24} aria-hidden {...p}>
    <rect x="18" y="4" width="78" height="16" rx="2" fill="#f4b54f" />
    <rect x="18" y="4" width="78" height="5.3" fill="#ffd27f" />
    <rect x="18" y="14.7" width="78" height="5.3" fill="#e2793a" />
    <rect x="6" y="4" width="14" height="16" rx="3" fill="#a983d6" />
    <rect x="17" y="3" width="6" height="18" fill="#c8d2ea" />
    <path d="M96 4 116 12 96 20z" fill="#f3d9b1" />
    <path d="M110 9.6 116 12 110 14.4z" fill="#1d3f86" />
  </svg>
);
export const ArtPen = (p: P) => (
  <svg viewBox="0 0 120 22" width={120} height={22} aria-hidden {...p}>
    <rect x="8" y="5" width="86" height="12" rx="6" fill="#2f6fb8" />
    <rect x="8" y="5" width="86" height="4" rx="2" fill="#5aa7e8" />
    <rect x="20" y="2" width="30" height="4" rx="2" fill="#c8d2ea" />
    <rect x="80" y="4" width="10" height="14" fill="#f4b54f" />
    <path d="M94 6 112 11 94 16z" fill="#1d3f86" />
    <circle cx="113" cy="11" r="1.6" fill="#f4b54f" />
  </svg>
);
export const ArtRuler = (p: P) => (
  <svg viewBox="0 0 120 30" width={120} height={30} aria-hidden {...p}>
    <rect x="2" y="4" width="116" height="22" rx="4" fill="#7b4fa6" opacity=".9" />
    {Array.from({ length: 22 }).map((_, i) => (
      <rect key={i} x={8 + i * 5} y="4" width="1.4" height={i % 2 ? 6 : 10} fill="#eef2fb" />
    ))}
  </svg>
);
export const ArtClip = (p: P) => (
  <svg viewBox="0 0 40 80" width={40} height={80} aria-hidden {...p}>
    <path
      d="M28 22v36a10 10 0 0 1-20 0V16a7 7 0 0 1 14 0v38a3.5 3.5 0 0 1-7 0V22"
      fill="none"
      stroke="#9fd0ff"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
  </svg>
);
export const ArtNotebook = (p: P) => (
  <svg viewBox="0 0 70 86" width={70} height={86} aria-hidden {...p}>
    <rect x="8" y="4" width="58" height="78" rx="6" fill="#e2793a" />
    <rect x="8" y="4" width="14" height="78" rx="4" fill="#c25f25" />
    <rect x="30" y="18" width="28" height="12" rx="3" fill="#fff3e0" />
    {Array.from({ length: 7 }).map((_, i) => (
      <circle key={i} cx="8" cy={14 + i * 10} r="3" fill="none" stroke="#c8d2ea" strokeWidth="2" />
    ))}
  </svg>
);
export const ArtScissors = (p: P) => (
  <svg viewBox="0 0 80 80" width={80} height={80} aria-hidden {...p}>
    <path d="M30 46 70 10M30 34l40 36" stroke="#c8d2ea" strokeWidth="5" strokeLinecap="round" />
    <circle cx="20" cy="26" r="10" fill="none" stroke="#a983d6" strokeWidth="6" />
    <circle cx="20" cy="54" r="10" fill="none" stroke="#a983d6" strokeWidth="6" />
  </svg>
);
