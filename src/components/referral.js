/**
 * referral component that provides a basic sidebar referral 
 * item for the blog-post template.
 */

import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import DOLogo from "../../static/do.svg"

const Referral = () => {
  return (
    <div className="card referral">
    <OutboundLink
      href="https://m.do.co/c/b95c2a8a5568"
      aria-label="DigitalOcean"
      rel="noopener"
    >
      <div className="referral__logo">
        {/* The DigitalOcean SVG can be found in the root of static */}
        <DOLogo alt="DigitalOcean" />{" "}
      </div>
      <p>
        Host your Django API, Headless CMS, and more on
        DigitalOcean.
      </p>
    </OutboundLink>
  </div>
  )
}

export default Referral
