const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      darkBlue: "hsl(238, 29%, 16%)",
      SoftRed: "hsl(14, 88%, 65%)",
      SoftViolet: "hsl(273, 75%, 66%)",
      SoftBlue: "hsl(240, 73%, 65%)",
      VeryDarkBlue: "hsl(237, 12%, 33%)",
      DarkGrayishBlue: "hsl(240, 6%, 50%)",
      LightGrayishBlue: "hsl(240, 5%, 91%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
