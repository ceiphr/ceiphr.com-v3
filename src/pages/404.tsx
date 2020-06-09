import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Not Found</h1>
            <h2 className="subtitle">You just hit a route that doesn&#39;t exist... the sadness.</h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
