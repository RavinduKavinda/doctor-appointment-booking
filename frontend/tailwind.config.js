/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
      primaryColor:"#0067FF",
      yellowColor:"#f1c40f",
      purpleColor:"#8e44ad",
      irisBlueColor:"#1abc9c",
      headingColor:"#2c3e50",
      textColor:"black",
    },

    boxShadow: {
      panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
    },
  },
},
  plugins: [],
};

