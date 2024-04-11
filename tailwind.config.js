module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "walden-green": "#183028",
        primary: {
          lighter: "#4b3f72",
          default: "#1f2041",
          darker: "#4b4c75",
        },
        secondary: {
          lighter: "#3c91e6",
          default: "#2867a6",
          darker: "#174e85",
        },
        thimble: {
          lighter: "#ed7e7e",
          default: "#e84545",
          darker: "#cf2525",
        },
      },
    },
    fontFamily: {
      serif: [
        "Merriweather",
        "ui-serif",
        "serif",
      ],
    },
  },
  variants: {},
  plugins: [],
};
