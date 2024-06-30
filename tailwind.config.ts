import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-desktop": "url('/bg-desktop-light.jpg')",
        "dark-desktop": "url('/bg-desktop-dark.jpg')",
        "light-mobile": "url('/bg-mobile-light.jpg')",
        "dark-mobile": "url('/bg-mobile-dark.jpg')",
        "check-gradient": "linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
