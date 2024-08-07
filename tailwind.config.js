/** @type {import('tailwindcss').Config} */
const colors = require("./src/constants/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        ...colors,
      },

      screens: {
        lm: { max: "900px" },
      
        mp: { max: "720px" },
        pp: { max: "610px" },
        lp: { max: "500px" },
        xs: { max: "380px" },
        ls: { max: "374px" },
        xsm: { max: "320px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
