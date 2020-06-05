/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="media bio">
      <figure className="media-left">
        <div className="image">
          <Img
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
          />
        </div>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{author.name}</strong>{" "}
            <small>
              <a rel="noopener noreferrer" target="_blank" href={`https://twitter.com/${social.twitter}`}>@ceiphr</a>
            </small>
            <br />
            {author.summary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
