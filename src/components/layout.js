/**
 * layout is the primary layout for all
 * pages on this site. It provides the navigation bar
 * and footer for each page.
 */

import React from "react"
import { Link } from "gatsby"
import { useMediaPredicate } from "react-media-hook"

import "../styles/index.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const isDark = useMediaPredicate("(prefers-color-scheme: dark)")
  const themeLogo = isDark ? "/logo-black.svg" : "/logo-white.svg"

  // Display the navigation bar on pages that aren't the homepage
  if (location.pathname !== rootPath) {
    header = (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to={`/`}>
            <img src={themeLogo} alt={title} width="64" height="64" />
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <div>
      <header>{header}</header>
      <main className="site-main">{children}</main>{" "}
      <div className="section">
        {/* The footer at the very bottom of the screen */}
        <footer className="footer">
          <div className="container">
            <div className="columns is-desktop">
              {/* Left side of footer: social links and copyright notice */}
              <div className="column">
                <span className="footer-links">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ceiphr/"
                  >
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ari/"
                  >
                    LinkedIn
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/ceiphr/"
                  >
                    Twitter
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://changelog.ceiphr.com/"
                  >
                    Changelog
                  </a>
                </span>
                <p>
                  Unless otherwise noted, all content © 2016-2020 Ari Birnbaum.
                </p>
              </div>

              {/* Right side of footer: privacy notice and OSS license */}
              <div className="column">
                <span className="footer-links">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.iubenda.com/privacy-policy/18781590"
                  >
                    Privacy Policy
                  </a>
                  {` `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.iubenda.com/privacy-policy/18781590/cookie-policy"
                  >
                    Cookie Policy
                  </a>
                </span>
                <p>
                  Source code licensed
                  {` `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ceiphr/gatsby-ceiphr/blob/master/LICENSE"
                  >
                    GNU GPL v3.0
                  </a>
                  .{` `}Fork it on GitHub.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
    </div>
  )
}

export default Layout
