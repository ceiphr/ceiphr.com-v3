/**
 * Index of the site. Offers the header graphic through lottie.
 * Displays a feed of the most recent posts.
 */

import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import type { FluidObject, FixedObject } from "gatsby-image"

import { Person } from "schema-dts"
import { JsonLd } from "react-schemaorg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"

import { Bio, Layout, SEO } from "../components"
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../static/gradient-logo.svg' o... Remove this comment to see the full error message
import Logo from "../../static/gradient-logo.svg"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          redirect: string
          featuredImage: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
  banner: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const schema = (
    <JsonLd<Person>
      item={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ari Birnbaum",
        alternateName: "Ceiphr",
        url: "https://www.ceiphr.com",
      }}
    />
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="No-nonsense technical articles from Ari Birnbaum" />
      {schema}

      <section className="hero hero-homepage is-halfheight is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="hero-banner">
              <h1>
                <Logo alt={siteTitle} />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-background__wrapper">
        <video
          className="hero-background"
          autoPlay
          loop
          muted
        >
          <source src={`/banner.webm`} type="video/webm" />
          <source src={`/banner.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <section className="post-feed post-feed--index">
          {posts.map(({ node }) => {
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid
            const title = node.frontmatter.title || node.fields.slug
            // Is this post a post or does it redirect to the real post?
            // This is used for publications on other platforms
            const IsRedirect = node.frontmatter.redirect || null

            if (IsRedirect) {
              return (
                <a
                  href={IsRedirect}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read the article: ${title}. This is an external link.`}
                >
                  <div className="card">
                    <div className="card-image">
                      <Img
                        className="card-image__content"
                        fluid={featuredImgFluid}
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h2 className="title is-4">{title}</h2>
                        <h3 className="subtitle is-6">
                          {node.frontmatter.date}
                        </h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <button className="button has-dark-text is-primary">
                          <span>See Post</span>
                          <span className="icon is-small">
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className="fas fa-times"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              )
            }

            return (
              <Link
                key={node.fields.slug}
                to={node.fields.slug}
                aria-label={`Read the article: ${title}.`}
              >
                <div className="card">
                  <div className="card-image">
                    <Img
                      className="card-image__content"
                      fluid={featuredImgFluid}
                    />
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h2 className="title is-4">{title}</h2>
                      <h3 className="subtitle is-6">{node.frontmatter.date}</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <button className="button has-dark-text is-primary">
                        <span>See Post</span>
                        <span className="icon is-small">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="fas fa-times"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
          {/* <Bio /> */}
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
