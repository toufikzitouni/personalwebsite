/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1100: "1100px", // Custom width of 1100px
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
