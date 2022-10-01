/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-helmet` if it exists... Remove this comment to see the full error message
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/react-media-hook` if it ex... Remove this comment to see the full error message
import { useMediaPredicate } from "react-media-hook"

type OwnProps = {
  description?: string
  lang?: string
  meta?: any[]
  title: string
  image?: string
}

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof SEO.defaultProps

// @ts-expect-error ts-migrate(7022) FIXME: 'SEO' implicitly has type 'any' because it does no... Remove this comment to see the full error message
const SEO = ({ description, lang, meta, title, image }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = "https://ceiphr.io/ceiphr.com-v3" + (image || "/banner.jpeg")
  const isDark = useMediaPredicate("(prefers-color-scheme: dark)")
    ? "https://ceiphr.io/ceiphr.com-v3/favicon-white.png"
    : "https://ceiphr.io/ceiphr.com-v3/favicon-black.png"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link
        key={`gatsby-plugin-manifest-icon-link`}
        rel="icon"
        type="image/png"
        href={isDark}
        sizes="32x32"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:creator" content={site.siteMetadata.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta name="color-scheme" content="dark light" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: ``,
}

export default SEO
