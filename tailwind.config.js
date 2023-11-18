/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gray1: "#D7D7D7",
          gray2: "#C4C4C4",
          gray3: "#909090",
          gray4: "#1D1D1D",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      fontFamily: {
        first: ["Raleway", "sans-serif"],
        second: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        subHero: "url('/subHero.png')",
        subHeroPhone: "url('/subHeroPhone.jpg')",
      },
    },
  },
  plugins: [],
};
