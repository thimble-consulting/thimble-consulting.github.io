const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Thimble Consulting`,
    siteUrl: `https://thimble.consulting`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Merriweather`,
            file:
              `https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap`,
          },
        ],
      },
    },
  ],
};
