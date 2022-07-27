/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      monserrat: "'Montserrat', sans-serif",
    },
  },
  variants: {
    fill: ["responsive", "hover", "focus", "group-hover"], // this line does the trick
  },
  plugins: [],
};
