/**
 * layout is the primary layout for all
 * pages on this site. It provides the navigation bar
 * and footer for each page.
 */

import React from "react"
import { Link } from "gatsby"
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-media-hook` if it ex... Remove this comment to see the full error message
import { useMediaPredicate } from "react-media-hook"

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../static/logo-black.svg' o... Remove this comment to see the full error message
import DarkLogo from "../../static/logo-black.svg"
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../static/logo-white.svg' o... Remove this comment to see the full error message
import LightLogo from "../../static/logo-white.svg"
import "../styles/index.scss"

const Layout = ({
  location,
  title,
  children
}: any) => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__PATH_PREFIX__'.
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const isDark = useMediaPredicate("(prefers-color-scheme: dark)")

  // Display the navigation bar on pages that aren't the homepage
  if (location.pathname !== rootPath) {
    header = (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="navbar-brand">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Link className="navbar-item" to={`/`}>
            {isDark ? (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <DarkLogo alt={title} width="64" height="64" />
            ) : (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LightLogo alt={title} width="64" height="64" />
            )}
          </Link>
        </div>
      </nav>
    )
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <header>{header}</header>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <main className="site-main">{children}</main>{" "}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="section">
        {/* The footer at the very bottom of the screen */}
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <footer className="footer">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="container">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="columns is-desktop">
              {/* Left side of footer: social links and copyright notice */}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="column">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <span className="footer-links">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ceiphr/"
                  >
                    GitHub
                  </a>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ari/"
                  >
                    LinkedIn
                  </a>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/ceiphr/"
                  >
                    Twitter
                  </a>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://changelog.ceiphr.com/"
                  >
                    Changelog
                  </a>
                </span>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                  Unless otherwise noted, all content © 2016-2020 Ari Birnbaum.
                </p>
              </div>

              {/* Right side of footer: privacy notice and OSS license */}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="column">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <span className="footer-links">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.iubenda.com/privacy-policy/18781590/legal"
                  >
                    Privacy Policy
                  </a>
                  {` `}
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.iubenda.com/privacy-policy/18781590/cookie-policy"
                  >
                    Cookie Policy
                  </a>
                </span>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                  Developed with
                  {` `}
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.gatsbyjs.com/"
                  >
                    Gatsby.js
                  </a>
                  {` `}and{` `}
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bulma.io/"
                  >
                    Bulma
                  </a>
                  .{` `}Hosted on{` `}
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vercel.com/"
                  >
                    Vercel
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=IBM+Plex+Sans+Condensed:ital,wght@1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </div>
  )
}

export default Layout
