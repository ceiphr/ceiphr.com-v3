/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
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
            email
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
    <div className="columns is-desktop bio">
      <div className="column">
        <div className="media">
          <figure className="media-left image">
            <Img fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{author.name}</strong>
                {` `}
                <small>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://twitter.com/${social.twitter}`}
                  >
                    @ceiphr
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-four-fifths">
        <p>{author.summary}</p>
      </div>
    </div>
  )
}

export default Bio
