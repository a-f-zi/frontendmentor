/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeDesaturatedBlue: "hsl(238, 29%, 16%)",
        themeSoftRed: "hsl(14, 88%, 65%)",
        themeDarkGrayishBlue: "hsl(237, 12%, 33%)",
        themeGrayishBlue: "hsl(240, 6%, 50%)",
        themeSoftViolet: "hsl(273, 75%, 66%)",
        themeSoftBlue: "hsl(240, 73%, 65%)",
        themeLightGrayishBlue: "hsl(240, 5%, 91%)",
        themeBaseFontSize: "12px",
      },

      fontFamily: {
        themeFont: ["Kumbh Sans"],
      },

      screens: {
        tall: { raw: "(min-height: 550px)" },
      },
    },
  },
  plugins: [],
};
