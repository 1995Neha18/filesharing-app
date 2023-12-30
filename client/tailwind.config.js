/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#C25A7C",
      secondary: "#583759",
    },
    backdropFilter: {
      none: "none",
      blur: "blur(100px)",
    },

    extend: {},
  },
  plugins: [],
};
