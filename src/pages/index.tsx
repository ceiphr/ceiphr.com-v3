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
      <div className="hero-background__wrapper">
        <div className="hero-background">
          <svg>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                id="fluid"
                numOctaves="0.1"
                seed="1"
                baseFrequency="0.001 0.001"
                type="fractalNoise"
              ></feTurbulence>
              <feDisplacementMap
                in2="turbulence"
                in="SourceGraphic"
                scale="200"
                xChannelSelector="R"
                yChannelSelector="G"
              ></feDisplacementMap>
              <animate
                xlinkHref="#fluid"
                attributeName="baseFrequency"
                dur="60s"
                values="0.001 0.001;0.004 0.006;0.001 0.003;0.005 0.003;0.003 0.004;0.001 0.001"
                keySplines="
                  .52 .02 .62 .99;
                  .52 .02 .62 .99;
                  .52 .02 .62 .99;
                  .52 .02 .62 .99;
                  .52 .02 .62 .99"
                keyTimes="
                  0;0.2;0.4;0.6;0.8;1"
                calcMode="spline"
                repeatCount="indefinite"
              />
            </filter>
          </svg>
        </div>
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
