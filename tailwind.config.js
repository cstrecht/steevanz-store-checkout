/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "steevanz-black": "#1A1A1A",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
