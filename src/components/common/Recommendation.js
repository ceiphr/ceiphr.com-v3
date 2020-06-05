import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Recommendation = ({ post }) => {
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const title = post.frontmatter.title || post.fields.slug

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
            <p>{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Recommendation
