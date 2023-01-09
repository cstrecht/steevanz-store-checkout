/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "steevanz-black": "#1A1A1A",
      white: "#FFFFFF",
      "steevanz-gold": "#C6B784",
      "steevanz-gray": "#5B5B5B",
      "steevanz-light-gray": "#E9E9E9",
      "danger-red": "#FF0000",
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
