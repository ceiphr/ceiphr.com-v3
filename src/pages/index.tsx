/**
 * Index of the site. Offers the header graphic through lottie.
 * Displays a feed of the most recent posts.
 */

import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import type { FluidObject } from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <section className="hero hero-homepage is-halfheight is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="hero-banner">
              <img src={`/gradient-logo.svg`} alt={siteTitle} />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="post-feed post-feed--index">
          {posts.map(({ node }) => {
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link to={node.fields.slug}>
                <div className="card">
                  <div className="card-image">
                    <Img
                      className="card-image__content"
                      fluid={featuredImgFluid}
                    />
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">{title}</p>
                      <p className="subtitle is-6">{node.frontmatter.date}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <button className="button is-primary">
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
