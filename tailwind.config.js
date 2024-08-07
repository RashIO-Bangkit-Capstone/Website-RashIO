const { default: daisyui } = require("daisyui");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        primary: "#876445",
        secondary: "#CA965C",
        tertiary: "#EEC373",
        neutral: "#F4DFBA",
        black: "#000000",
        gray: "#434343",
        white: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
