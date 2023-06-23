/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      PermanentMarker: ["Permanent Marker"],
    },
    extend: {
      colors: {
        deepPurple: "#2C063F",
        lightPurple: "#2C063F73",
        yallow: "#FFFB7D",
        lightYallow: "#FBF9CA",
      },
      boxShadow: {
        charitiesBtn: "-1px 3px 0px 0px #2C063F",
      },
    },
  },
  plugins: [],
};
