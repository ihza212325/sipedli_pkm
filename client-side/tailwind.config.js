/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        super: "10rem",
        supermobile: "6rem",
      },
      colors: {
        yellow: {
          1000: "#FFF240",
        },
        blue: {
          1000: "#017eb7",
          1100: "#F2F8FA",
          1001: "#204F8F",
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
