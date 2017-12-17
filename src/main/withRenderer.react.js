import React from 'react'
import PropTypes from 'prop-types'

const withRenderer = (ComponentToWrap) => {

  return class RendererComponent extends React.Component {

    static contextTypes = {
      renderer: PropTypes.object.isRequired,
    }

    render() {
      return (
        <ComponentToWrap {...this.props} renderer={this.context.renderer} />
      )
    }
  }
}

export default withRenderer
