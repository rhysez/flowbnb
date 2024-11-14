import type { Config } from "tailwindcss";
import {white} from "next/dist/lib/picocolors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chalk_white: "var(--chalk_white)",
        cherry_red: "var(--cherry_red)",
        brilliant_red: "var(--brilliant_red)",
      },
    },
  },
  plugins: [],
} satisfies Config;
