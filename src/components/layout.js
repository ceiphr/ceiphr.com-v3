import React from "react"
import { Link } from "gatsby"

import "../styles/app.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname !== rootPath) {
    header = (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to={`/`}>
            {title}
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <div>
        <header>{header}</header>
        <main className="site-main">
          {children}
        </main>{" "}
        <div className="section">
          {/* The footer at the very bottom of the screen */}
          <footer className="footer">
            <div className="container">
              <div className="columns is-desktop">
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
                    .{` `}
                    Articles licensed{` `}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    >
                      CC BY-NC-SA 4.0
                    </a>
                    . You may redistribute articles if you follow the terms of
                    the license.
                  </p>
                </div>
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
                    Unless otherwise noted, all content copyright 2016 &mdash;
                    2020 Ari Birnbaum (Ceiphr).
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
  )
}

export default Layout
