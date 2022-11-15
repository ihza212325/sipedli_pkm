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
        red: {
          1000: "#EC272B",
        },
      },
      boxShadow: {
        "4xl": "-10px 10px 0px 0px rgba(255,242,64,1);",
        "5xl": "6px 7px 0px 0px rgba(255,242,64,1)",
      },
    },
  },
  plugins: [],
};
