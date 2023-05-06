/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeRed: "hsl(0, 100%, 74%)",
        themeGreen: "hsl(154, 59%, 51%)",
        themeGreenHover: "hsla(154, 59%, 51%, 0.7)",
        themeBlue: "hsl(248, 32%, 49%)",
        themeDarkBlue: "hsl(249, 10%, 26%)",
        themeGrayishBlue: "hsl(246, 25%, 77%)",
      },

      fontFamily: {
        themeFont: ["Poppins"],
      },
    },
  },
  plugins: [],
};
