import React from "react"
import { Curtains } from "react-curtains"

export const wrapRootElement = ({ element }) => {
  return <Curtains>{element}</Curtains>
}
