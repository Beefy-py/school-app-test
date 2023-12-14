import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // bee body yellow
        primary: {
          DEFAULT: "#fccc29",
          "50": "#ffffff",
          "100": "#fef8e6",
          "200": "#fde9bf",
          "300": "#fcd998",
          "400": "#fcc871",
          "500": "#fccc29",
          "600": "#e3b525",
          "700": "#b8961f",
          "800": "#8d761a",
          "900": "#725f15",
        },
        // bee wings
        secondary: {
          DEFAULT: "#bbeeee",
          "50": "#ffffff",
          "100": "#f1fafa",
          "200": "#d3f5f5",
          "300": "#b5f0f0",
          "400": "#97ebeb",
          "500": "#bbeeee",
          "600": "#a2dada",
          "700": "#89c6c6",
          "800": "#70b2b2",
          "900": "#579e9e",
        },
        tertiary: {
          DEFAULT: "#209CEE",
          "50": "#E6F8FF",
          "100": "#C2E4FF",
          "200": "#9ED0FF",
          "300": "#7ABDFF",
          "400": "#57A9FF",
          "500": "#209CEE",
          "600": "#1E8ADC",
          "700": "#1B78C9",
          "800": "#1866B6",
          "900": "#1554A3",
        },
      },
      fontFamily: {
        cabin: ["Cabin Sketch", "cursive"],
        quicksand: ["Quicksand", "sans"],
      },
      screens: {
        "3xl": "2000px",
        "4xl": "2560px",
        "5xl": "3200px",
        "6xl": "3840px",
      },
    },
  },
  plugins: [],
};

export const theme = config.theme?.extend;

export default config;
