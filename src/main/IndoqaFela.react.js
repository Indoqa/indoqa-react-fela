import React, {PropTypes} from 'react'
import {Provider as FelaProvider} from 'react-fela'

import {createRenderer} from './createRenderer'
import {createMountNode} from './createMountNode'

const IndoqaFela = ({init, children}) => (
  <FelaProvider renderer={createRenderer(init)} mountNode={createMountNode()}>
    {children}
  </FelaProvider>
)

IndoqaFela.propTypes = {
  init: PropTypes.func,
  children: PropTypes.object.isRequired,
}

IndoqaFela.defaultProps = {
  customTheme: {},
  init: () => {},
}

export {IndoqaFela}
