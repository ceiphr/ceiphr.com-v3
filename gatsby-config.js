module.exports = {
  siteMetadata: {
    title: `Ceiphr`,
    author: {
      name: `Ari Birnbaum`,
      summary: `Bachelor of Computational Mathematics at RIT. Freelance Technical Writer at DigitalOcean.`,
    },
    description: `I'm Ari Birnbaum, an aspiring software engineer currently studying Computational Mathematics as a freshman at the Rochester Institute of Technology.`,
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
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ari Birnbaum (Ceiphr)`,
        short_name: `Ceiphr`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
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
