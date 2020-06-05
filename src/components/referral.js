import React from "react"

const Referral = () => {
  return (
    <div className="card referral">
    <a
      href="https://m.do.co/c/b95c2a8a5568"
      aria-label="DigitalOcean"
      rel="noopener"
    >
      <div className="referral__logo">
        <img src={`/do.svg`} alt="DigitalOcean" />{" "}
      </div>
      <p>
        Host your Node API, Headless CMS, and more on
        DigitalOcean.
      </p>
    </a>
  </div>
  )
}

export default Referral
