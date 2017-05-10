import React, {PropTypes} from 'react'
import {Provider, ThemeProvider} from 'react-fela'
import merge from 'deepmerge'

import {createRenderer} from './createRenderer'
import {createMountNode} from './createMountNode'
import {theme as baseTheme} from './theme'

const buildTheme = (customTheme) => {
  return merge(baseTheme, customTheme)
}

const IndoqaFela = ({customTheme, init, children}) => (
  <Provider renderer={createRenderer(init)} mountNode={createMountNode()}>
    <ThemeProvider theme={buildTheme(customTheme)}>
      {children}
    </ThemeProvider>
  </Provider>
)

IndoqaFela.propTypes = {
  customTheme: PropTypes.object,
  init: PropTypes.func,
  children: PropTypes.object.isRequired,
}

IndoqaFela.defaultProps = {
  customTheme: {},
  init: () => {},
}

export {IndoqaFela}
