import React from "react"
import { PageProps, graphql } from "gatsby"
import type { FixedObject } from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  banner: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const NotFoundPage = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="hero-fullheight-background__wrapper">
        <video
          className="hero-background"
          poster={data.banner.childImageSharp.fixed.src}
          autoPlay
          loop
          muted
        >
          <source src={`/banner.webm`} type="video/webm" />
          <img
            alt="Banner Image"
            src={data.banner.childImageSharp.fixed.srcWebp}
          />
          <img alt="Banner Image" src={data.banner.childImageSharp.fixed.src} />
        </video>
      </div>
      <section className="hero is-primary is-fullheight is-404">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">404: Not Found</h1>
            <h2 className="subtitle">
              You just hit a route that doesn&#39;t exist... the sadness.
            </h2>
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
    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fixed(width: 960, height: 540) {
          src
          srcWebp
        }
      }
    }
  }
`
