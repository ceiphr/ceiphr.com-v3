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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="card referral">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <OutboundLink
        href="https://m.do.co/c/b95c2a8a5568"
        aria-label="DigitalOcean"
        target="_blank"
        rel="noopener"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="referral__logo">
          {/* The DigitalOcean SVG can be found in the root of static */}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DOLogo alt="DigitalOcean" />{" "}
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <p>
          Helping millions of developers easily build, test, manage, and scale
          applications of any size.
        </p>
      </OutboundLink>
    </div>
  )
}

export default Referral
