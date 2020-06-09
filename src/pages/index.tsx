/**
 * Index of the site. Offers the header graphic through lottie.
 * Displays a feed of the most recent posts.
 */

import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import type { FluidObject } from "gatsby-image"

import { Person } from "schema-dts"
import { JsonLd } from "react-schemaorg"

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
          datePub: string
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
      <SEO title="Ari Birnbaum" />
      {schema}

      <section className="hero hero-homepage is-halfheight is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="hero-banner">
              <img src={`/gradient-logo.svg`} alt={siteTitle} />
            </div>
          </div>
        </div>
      </section>
      <div className="hero-background__wrapper">
        <video className="hero-background" autoPlay loop muted>
          <source src={`/banner.webm`} type="video/webm" />
        </video>
      </div>
      <div className="container">
        <section className="post-feed post-feed--index">
          {posts.map(({ node }) => {
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link key={node.fields.slug} to={node.fields.slug}>
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
                      <p className="subtitle is-6">{node.frontmatter.datePub}</p>
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
    allMarkdownRemark(sort: { fields: [frontmatter___datePub], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            datePub(formatString: "MMMM DD, YYYY")
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
