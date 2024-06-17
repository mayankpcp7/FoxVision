/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      container: { center: true, padding: "12px" },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkblue: "#071838",
        sky: "#05D5FB",
        purple: "#5925F2",
        lightpurple: "#E6DEFF",
        lightsky: "#E9FCFF",
        darkpurple: "#4B17E6",
        offpurple: " #4B17E60A",
      },
      fontSize: {
        " xxsm": "8px",
        "4xxl": "40px",
        "6xxl": "64px",
        "8xxl": "88.41px",
      },
      lineHeight: {
        sm: "107.9%",
        md: "121%",
        lg: "183%",
      },
    },
  },
  plugins: [],
};
