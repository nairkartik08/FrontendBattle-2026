import type { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arctic: "#F1F6F4",
        mint: "#D9E8E2",
        forsythia: "#FFC801",
        saffron: "#FF9932",
        nocturnal: "#114C5A",
        oceanic: "#172B36",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
        structure: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 200, 1, 0.18)",
        panel: "0 24px 70px rgba(23, 43, 54, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
