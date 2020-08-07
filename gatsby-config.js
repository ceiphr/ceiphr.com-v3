module.exports = {
  siteMetadata: {
    title: `Ceiphr`,
    author: {
      name: `Ari Birnbaum`,
      summary: `Studying Computer Science at Stevens.`,
    },
    description: `I'm Ari Birnbaum, an aspiring software engineer currently studying Computer Science as a sophomore at Stevens Institute of Technology.`,
    siteUrl: `https://www.ceiphr.com`,
    social: {
      twitter: `ceiphr`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /static/
        }
      }
    },
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
        anonymizeIp: true,
        respectDNT: true,
        cookieExpires: 0,
        defer: true,
        storeGac: false,
        allowAdFeatures: false,
        forceSSL: true,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Ceiphr RSS",
            link: "https://www.ceiphr.com/",
          },
        ],
      },
    },
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

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
