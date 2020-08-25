import React, { Component } from "react"

type State = any

class carbonAds extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'customClass' does not exist on type 'Rea... Remove this comment to see the full error message
      customClass: this.props.customClass,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'carbonUrl' does not exist on type 'Reado... Remove this comment to see the full error message
      carbonUrl: this.props.carbonUrl,
      aSync: true,
    }
  }

  componentDidMount() {
    const carbon_wrapper = document.querySelector(
      `.${
        this.state.carbonWrapper
          ? this.state.carbonWrapper
          : "carbon-ads-wrapper"
      }`
    )
    const script = document.createElement("script")
    script.src = this.state.carbonUrl
    script.async = this.state.aSync
    script.id = "_carbonads_js"
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    carbon_wrapper.appendChild(script)
  }

  render() {
    return (
      <div
        className={`carbon-ads-wrapper ${this.state.customClass}`}
        aria-hidden="true"
      ></div>
    )
  }
}

export default carbonAds
