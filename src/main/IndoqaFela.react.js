import React from 'react'
import PropTypes from 'prop-types'
import {Provider as FelaProvider} from 'react-fela'

import {createRenderer} from './createRenderer'
import {createMountNode} from './createMountNode'

const IndoqaFela = ({fela, children}) => (
  <FelaProvider renderer={createRenderer(fela)} mountNode={createMountNode()}>
    {children}
  </FelaProvider>
)

IndoqaFela.propTypes = {
  fela: PropTypes.object,
  children: PropTypes.object.isRequired,
}

IndoqaFela.defaultProps = {
  fela: {},
}

export {IndoqaFela}
