/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        nimPushti: "#FBF0F4",
        hover: "#D23166",
        paragrph: "#666666",
      },
      fontFamily: {
        roboto: "Roboto",
        one: "Fredoka One",
        madurai: " Hind Madurai",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1165px",
    },
  },
  plugins: [],
};
