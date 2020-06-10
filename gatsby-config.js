module.exports = {
  siteMetadata: {
    title: `Ceiphr`,
    author: {
      name: `Ari Birnbaum`,
      summary: `Studying Computational Mathematics at RIT. Freelance Technical Writer at DigitalOcean.`,
    },
    description: `I'm Ari Birnbaum, an aspiring software engineer currently studying Computational Mathematics as a sophomore at the Rochester Institute of Technology.`,
    siteUrl: `https://www.ceiphr.com`,
    social: {
      twitter: `ceiphr`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158198449-1`,
        head: false,
        anonymize: true,
        anonymizeIp: true,
        respectDNT: true,
        defer: true,
        name: "ceiphrAnalytics",
        cookieExpires: 0,
        cookieName: "ceiphrGACookie",
        cookieDomain: "www.ceiphr.com",
        storeGac: false,
        allowAdFeatures: false,
        forceSSL: true,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ceiphr`,
        short_name: `Ceiphr`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ef486c`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
        include_favicon: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn:
          "https://cb72ea3603084a5e844f43999cf429a5@o248021.ingest.sentry.io/5270757",
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
  ],
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
