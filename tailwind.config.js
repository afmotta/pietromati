/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const customColors = {
  pink: {
    DEFAULT: "#BF1F6A",
    light: "#db7699",
    lighter: "#f9dde5",
    dark: "#7c1e46",
  },
  red: {
    DEFAULT: colors.red['500'],
    light: colors.red['300'],
    lighter: colors.red['100'],
    dark: colors.red['800'],
  },
  rose: {
    DEFAULT: colors.rose['600'],
    light: colors.rose['300'],
    lighter: colors.rose['100'],
    dark: colors.rose['800'],
  }
};

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
      main: customColors.rose,
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
      handwrite: ["var(--font-handwrite)"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
