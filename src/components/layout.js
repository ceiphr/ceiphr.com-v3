import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <br />
        <a target="_blank" href="https://www.iubenda.com/privacy-policy/18781590">Privacy Policy</a> 
        {` `}
        <a target="_blank" href="https://www.iubenda.com/privacy-policy/18781590/cookie-policy">Cookie Policy</a>
      </footer>
    </div>
  )
}

export default Layout
