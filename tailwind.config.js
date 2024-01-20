/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      main: {
        DEFAULT: "#BF1F6A",
        light: "#db7699",
        lighter: "#f9dde5",
        dark: "#7c1e46",
      },
      gray: colors.gray,
      white: colors.white,
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
      handwrite: ["var(--font-handwrite)"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
