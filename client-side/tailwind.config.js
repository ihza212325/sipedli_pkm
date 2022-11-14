/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          1000: "#FFF240",
        },
        blue: {
          1000: "#017eb7",
          1100: "#F2F8FA",
        },
      },
    },
  },
  plugins: [],
};
