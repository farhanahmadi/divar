/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-primary-900": "#020621",
        "dark-primary-500": "#1c1f38",
        "light-primary-400": "#f5f5f5",
        "light-primary-600": "#4b5563",
      },
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
      boxShadow: {
        "text-field-shadow":
          "rgba(60,64,67,0.3) 0px 1px 2px 0px, rgba(60,64,67,0.15) 0px 2px 6px 2px",
      },
    },
  },
  plugins: [],
};
