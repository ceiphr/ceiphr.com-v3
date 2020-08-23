/**
 * Recommendation component takes the data from the post
 * parameter to create a basic recommendation card.
 */

import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const Recommendation = ({
  post
}: any) => {
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const title = post.frontmatter.title || post.fields.slug
  // Is this post a post or does it redirect to the real post?
  // This is used for publications on other platforms
  const IsRedirect = post.frontmatter.redirect || null

  if (IsRedirect) {
    return (
      <a href={IsRedirect} target="_blank" rel="noreferrer">
        <div className="card">
          <div className="card-image">
            <Img className="card-image__content" fluid={featuredImgFluid} />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{post.frontmatter.date}</p>
              </div>
            </div>
            <div className="content">
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
              <button className="button is-primary">
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
    <Link to={post.fields.slug}>
      <div className="card">
        <div className="card-image">
          <Img className="card-image__content" fluid={featuredImgFluid} />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{post.frontmatter.date}</p>
            </div>
          </div>
          <div className="content">
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
            />
            <button className="button is-primary">
              <span>See Post</span>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faArrowRight} className="fas fa-times" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Recommendation
