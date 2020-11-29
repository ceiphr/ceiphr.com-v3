import React from "react"
import renderer from "react-test-renderer"

import Referral from "../referral"

describe("Referral", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Referral />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
