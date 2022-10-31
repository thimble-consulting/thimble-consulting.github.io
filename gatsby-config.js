const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Thimble Consulting`,
    siteUrl: `https://thimble.consulting`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap"
    }, {
      resolve: '@builder.io/gatsby',
      options: {
        publicAPIKey: "464eac5a0492435cb67f71783742bba3",
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/page.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    }
  ]
};
