import type { Config } from "tailwindcss";

const config: Config = {
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
        isness: {
          primary: "#460F49",
          white: "#FAF6F0",
          darkGrey: "rgba(0, 0, 0, 0.56)",
        },
      },
      fontFamily: {
        DreamAvenue: ["DreamAvenue"],
        Scripter: ["Scripter"],
      },
    },
  },
  plugins: [],
};
export default config;
