import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { DiscussionEmbed } from "disqus-react"
import { CarbonAds, Recommendation, SEO, Bio, Layout, Referral } from "../components"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  const title = post.frontmatter.title
  const slug = post.frontmatter.slug
  const featuredImgFluid = [
    `linear-gradient(
      rgba(128, 128, 128, 0.5), 
      rgba(128, 128, 128, 0.5)
    )`,
    post.frontmatter.featuredImage.childImageSharp.fluid,
  ]
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }
  const recommendedPosts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="content">
        <BackgroundImage
          Tag="section"
          className="hero is-medium"
          fluid={featuredImgFluid}
        >
          <div className="hero-body"></div>
          <div className="hero-footer">
            <div className="container">
              <h1 className="article-title title is-uppercase">
                {post.frontmatter.title}
              </h1>
            </div>
          </div>
        </BackgroundImage>
        <div className="container">
          <div className="post-columns">
            {/* Article body and license footer */}
            <section className="post-full-content">
              <Bio />
              <div
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div>
                This article is licensed under{" "}
                <a
                  rel="license noopener noreferrer"
                  target="_blank"
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                >
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International
                </a>
                .
              </div>
              <br />
            </section>
            {/* Article sidebar advertisement and referral link */}
            <section className="post-sidebar">
              <div className="post-sidebar-widgets">
                <Referral />
                <CarbonAds />
              </div>
            </section>
          </div>
        </div>
      </article>
      {/* Post blog-post recommendations and comment section */}
      <section className="container">
        <div className="post-recommendations">
          {recommendedPosts.map(({ node }) => (
            <Recommendation key={node.fields.slug} post={node} />
          ))}
        </div>
        <DiscussionEmbed {...disqusConfig} />
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
      filter: { fields: { slug: { ne: $slug } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
