/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query CreditQuery {
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
            short_summary
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
    <div className="media credit">
      <div className="media-content">
        <div className="content">
          <p>
            Article by <strong>{author.name}</strong>{` `}
            <small>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://github.com/ceiphr`}
              >
                @ceiphr
              </a>
            </small>
            <br />
            {author.short_summary}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
