import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: "#050a1c", 900: "#03061a", 800: "#081030", 700: "#0d1840", 600: "#14225a" },
        brand: {
          blue: "#2f6fb8",
          sky: "#5aa7e8",
          deep: "#1d3f86",
          purple: "#7b4fa6",
          lilac: "#a983d6",
          amber: "#f4b54f",
          orange: "#e2793a",
        },
        paper: "#eef2fb",
        mist: "#9aa7c7",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-rev": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        spin: { to: { transform: "rotate(360deg)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-16px)" } },
        shine: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
        aurora: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(8%,-6%) scale(1.15)" },
          "66%": { transform: "translate(-6%,8%) scale(0.92)" },
        },
        ping2: { "0%": { transform: "scale(1)", opacity: "0.7" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        "spin-slow": "spin 26s linear infinite",
        "spin-slower": "spin 48s linear infinite",
        float: "float 7s ease-in-out infinite",
        shine: "shine 6s linear infinite",
        aurora: "aurora 22s ease-in-out infinite",
        ping2: "ping2 2.2s cubic-bezier(0,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
