import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EFEFEE",
        ink: "#1F1A19",
        cocoa: "#2A1F1E",
        bronze: {
          DEFAULT: "#A67C4E",
          light: "#C9A57A",
        },
        cream: "#F7F4EF",
        line: "rgba(31, 26, 25, 0.15)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        logo: ["var(--font-logo)", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        micro: "0.12em",
        button: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
