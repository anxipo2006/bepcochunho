import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#ff6f61",
          dark: "#c24135",
          soft: "#fff1ef",
        },
        teal: {
          DEFAULT: "#10b8c2",
        },
        "bep-orange": {
          DEFAULT: "#FF5A36",
          dark: "#E04828",
          soft: "#FFF3F0",
        },
        "fresh-teal": {
          DEFAULT: "#00B4D8",
          dark: "#0096B4",
          soft: "#E5F7FB",
        },
        offwhite: "#FAFAFA",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-roboto-mono)", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};

export default config;
