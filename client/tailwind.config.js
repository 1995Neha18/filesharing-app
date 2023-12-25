/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#045F5F",
      secondary: "#0909FF",
    },
    backdropFilter: {
      none: "none",
      blur: "blur(100px)",
    },

    extend: {},
  },
  plugins: [],
};
