/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        200: "#C4C4CC",
        100: "#E1E1E6",
      },
      cyan: {
        500: "#81D8F7",
        300: "#9BE1FB",
      },
    },
    fontSize: {
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 32,
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
