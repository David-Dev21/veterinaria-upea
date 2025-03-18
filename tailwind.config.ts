import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c71d8",
        secondary: "#F0C528",
        tertiary: "#2E2D2E",
      },
    },
  },
  plugins: [],
} satisfies Config;
