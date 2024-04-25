const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      animation: {
        snapIn: "snapIn 600ms ease-out",
      },
      fontFamily: {
        sans: ["var(--font-libreFranklin)", ...fontFamily.sans],
        headline: ["var(--font-rockSalt)", fontFamily.sans],
      },
      keyframes: {
        snapIn: {
          "0%": { transform: "translateY(-20px)" },
          "80%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
