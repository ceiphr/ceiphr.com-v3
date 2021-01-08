import React from "react"
import { PageProps, graphql } from "gatsby"
import type { FluidObject } from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// @ts-expect-error curtains.js doesn't offer types
import HeroScene from "../components/heroScene"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  banner: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const NotFoundPage = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="hero-fullheight-background__wrapper">
        <HeroScene isFullheight={true}>
          <img src={data.banner.childImageSharp.fluid.src} alt="Banner Image" />
        </HeroScene>
      </div>
      <section className="hero is-transparent is-fullheight is-404">
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
    banner: file(relativePath: { eq: "banner-alt-80.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 960) {
          src
        }
      }
    }
  }
`
