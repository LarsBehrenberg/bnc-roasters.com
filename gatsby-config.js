require("dotenv").config({
  path: `.env`,
})

const config = require("./config/site")

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    // Data Sourcing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/success`, `/cancellation`, `/404`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        // banner: config.banner,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.favicon,
      },
    },
    // Styling and font plugins
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // Source stripe products
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
        auth: false,
      },
    },
    // Analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-ZK6G6R870M`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
