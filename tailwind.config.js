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
        "light-primary-300": "#E0E0E0",
        "light-primary-600": "#4b5563",
        "light-hover": "#e4e4e7",
        "red-primary-500": "#BE3737",
      },
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
      boxShadow: {
        "text-field-shadow":
          "rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 1px 2px 0px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
