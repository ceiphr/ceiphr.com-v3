/**
 * referral component that provides a basic sidebar referral
 * item for the blog-post template.
 */

import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../static/do.svg' or its co... Remove this comment to see the full error message
import DOLogo from "../../static/do.svg"

const Referral = () => {
  return (
    <div
      className="card referral"
      aria-label={`Learn more about the DigitalOcean development platform.`}
    >
      <OutboundLink
        href="https://m.do.co/c/b95c2a8a5568"
        aria-label="DigitalOcean"
        target="_blank"
        rel="noopener"
      >
        <div className="referral__logo">
          {/* The DigitalOcean SVG can be found in the root of static */}
          <DOLogo alt="DigitalOcean" />{" "}
        </div>
        <p>
          Helping millions of developers easily build, test, manage, and scale
          applications of any size.
        </p>
      </OutboundLink>
    </div>
  )
}

export default Referral
