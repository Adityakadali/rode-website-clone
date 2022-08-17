/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        mud: {
          100: "#ac9870",
        },
        cement: {
          100: "#c7c7c7",
          200: "#aeaeae",
        },
        bpink: {
          100: "#faf9f7",
          200: "#d4cbbc",
        },
        pblue: {
          100: "#a473c4",
          200: "#9956c0",
        },
      },
    },
  },
  plugins: [],
};
