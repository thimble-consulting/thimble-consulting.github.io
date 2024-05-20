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
        "non-photo-blue": "#A631FA",
        "ghost-white": "#F3F7FF",
        "raisin-black": "#272932",
        "french-blue": "#0075C4",
        "weblink-blue": {
          default: "#2f6ca8",
          darker: "#0f4a85",
        },
        "weblink-visited": {
          default: "#800080",
        },
        thimble: {
          lighter: "#ed7e7e",
          default: "#E43A3A",
          darker: "#cf2525",
        },
      },
    },
    fontFamily: {
      sans: [
        "Jakarta Sans",
        "ui-sans-serif",
        "sans-serif",
      ],
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
