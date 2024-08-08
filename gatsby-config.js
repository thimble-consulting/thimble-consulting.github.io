module.exports = {
  siteMetadata: {
    title: `Thimble Consulting`,
    description:
      "We implement technology solutions that help businesses adapt to the evolving needs of growth.",
    siteUrl: "https://thimble.dev",
    url: "https://thimble.dev", // No trailing slash allowed!
    image: "/thimble.png",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    // Images Plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // End of Images Plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-piwik-pro",
      options: {
        containerUrl: "https://thimble.containers.piwik.pro",
        siteId: process.env.PIWIK_SITE_ID,
        enabled: process.env.NODE_ENV === "production",
      },
    },
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
          {
            name: `Jakarta Sans`,
            file:
              `https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png",
      },
    },
  ],
};
