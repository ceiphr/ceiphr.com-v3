/**
 * blog-post is the template used for blog post markdown
 * data found in content/blog.
 */

import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { JsonLd } from "react-schemaorg"
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-media-hook` if it ex... Remove this comment to see the full error message
import { useMediaPredicate } from "react-media-hook"

import {
  CarbonAds,
  Recommendation,
  SEO,
  Bio,
  Layout,
  Referral,
} from "../components"

function dimBackground(post: any, isDark: any) {
  // Uses gatsby-background-image for an opacity gradient
  // then a lazy-loaded and optimized background image
  if (isDark) {
    return [
      `linear-gradient(
        rgba(255, 255, 255, 0.3), 
        rgba(255, 255, 255, 0.25)
      )`,
      post.frontmatter.featuredImage.childImageSharp.fluid,
    ]
  }
  return [
    `linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    )`,
    post.frontmatter.featuredImage.childImageSharp.fluid,
  ]
}

const BlogPostTemplate = ({
  data,
  location
}: any) => {
  // Site data from gatsby-config
  const siteTitle = data.site.siteMetadata.title

  // Data for the article
  const post = data.markdownRemark

  const isDark = useMediaPredicate("(prefers-color-scheme: dark)")
  const featuredImgFluid = dimBackground(post, isDark)

  // Data for two article cards at the bottom of the template
  const recommendedPosts = data.allMarkdownRemark.edges

  const schema = (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": post.fields.slug,
        },
        headline: post.frontmatter.title,
        image: [post.frontmatter.featuredImage.childImageSharp.fluid.src],
        datePublished: post.frontmatter.date,
        dateModified: post.frontmatter.dateMod,
        author: {
          "@type": "Person",
          name: "Ari Birnbaum",
        },
        publisher: {
          "@type": "Organization",
          name: "Ari Birnbaum (Ceiphr)",
          logo: {
            "@type": "ImageObject",
            url: "/icon.png",
          },
        },
      }}
    />
  )

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout location={location} title={siteTitle}>
      {/* SEO data */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.featuredImage.childImageSharp.fluid.src}
      />
      {schema}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <article className="content">
        {/* Header background image and title */}
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <BackgroundImage
          Tag="section"
          className="hero is-medium"
          fluid={featuredImgFluid}
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="hero-body"></div>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="hero-footer">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="container">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p className="article-date subtitle">{post.frontmatter.date}</p>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <h1 className="article-title title is-uppercase">
                {post.frontmatter.title}
              </h1>
            </div>
          </div>
        </BackgroundImage>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="container">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="post-columns">
            {/* Article body and license footer */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <section className="post-full-content">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Bio />
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div>
                This article is licensed under{` `}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a
                  rel="license noopener noreferrer"
                  target="_blank"
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                >
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International
                </a>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                .<br />
                Found an error in this article? Email me{" "}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a
                  rel="license noopener noreferrer"
                  target="_blank"
                  href="mailto:ari+error@ceiphr.com"
                >
                  ari@ceiphr.com
                </a>
                {` `}or tweet at me{` `}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a
                  rel="license noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/ceiphr"
                >
                  @ceiphr
                </a>.
              </div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <br />
            </section>

            {/* Article sidebar advertisement and referral link */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <section className="post-sidebar">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="post-sidebar-widgets">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Referral />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CarbonAds
                  customClass="carbonads__wrapper"
                  carbonUrl="https://cdn.carbonads.com/carbon.js?serve=CK7I62QM&placement=ceiphrcom"
                />
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Post blog-post recommendations and comment section */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <section className="container">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="post-recommendations">
          {recommendedPosts.map(({
            node
          }: any) => (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Recommendation key={node.fields.slug} post={node} />
          ))}
        </div>
      </section>
    </Layout>
  );
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateMod(formatString: "MMMM DD, YYYY")
        description
        redirect
        featuredImage {
          childImageSharp {
            fluid(quality: 100, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
              src
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
            redirect
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
