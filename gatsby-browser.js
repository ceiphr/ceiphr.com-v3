import "prismjs/themes/prism.css"
import React from "react"
import { Curtains } from "react-curtains"

require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

export const wrapRootElement = ({ element }) => {
  return (
    <Curtains antialias={false} renderingScale={0.5}>
      {element}
    </Curtains>
  )
}
