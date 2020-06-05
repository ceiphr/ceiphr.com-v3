import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import { CarbonAds } from "../components/common"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const title = post.frontmatter.title
  const slug = post.frontmatter.slug
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container">
        <article className="content">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{post.frontmatter.title}</h1>
                <Bio />
              </div>
            </div>
          </section>
          <div className="post-columns">
            <section className="post-full-content">
              {/* The main post content */}
              <div
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                />
              </a>
              <br />
              This work is licensed under a{" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License
              </a>
              .
            </section>
            <section className="post-sidebar">
              <div className="post-sidebar-widgets">
                <div className="card referral">
                  <a
                    href="https://m.do.co/c/b95c2a8a5568"
                    aria-label="DigitalOcean"
                    rel="noopener"
                  >
                    <div className="referral__logo">
                      {/* <img src={`/images/icons/do.svg`} alt="DigitalOcean" /> */}
                    </div>
                    <p>
                      This website is hosted on DigitalOcean. Use my referral
                      link for a discount.
                    </p>
                  </a>
                </div>
                <CarbonAds />
              </div>
            </section>
          </div>
        </article>
        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <DiscussionEmbed {...disqusConfig} />
      </div>
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
      }
    }
  }
`
