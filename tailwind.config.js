/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
      },
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
        offpurple: "#4B17E60A",
        gray: "#E5E5E5",
        comet: "#515D74",
        mediumPurple: "#8B66F6",
      },
      fontSize: {
        xxsm: "8px",
        "4xxl": "40px",
        "6xxl": "64px",
        "8xxl": "88.41px",
      },
      lineHeight: {
        sm: "107.9%",
        md: "121%",
        lg: "183%",
        xl: "122%",
      },
      boxShadow: {
        navshadow: "0px 0px 13px 0px #00000024",
        creativeiconshadow: " 0px 12.63px 25.25px 0px #4B17E62B",
        whatwedo: " 0px 16.7px 41.74px 0px #3B3E430D",
        graphicdesign: "0px 10px 20px 0px #05D5FB29",
        designcardshadow: "0px 4px 27px 0px #4B17E614",
      },
      screens: {
        xlg: "992px",
        xs: "425px",
      },
      backgroundImage: {
        footer:
          "linear-gradient(0deg, #071838, #071838), linear-gradient(0deg, #05D5FB, #05D5FB)",
      },
    },
  },
  plugins: [],
};
