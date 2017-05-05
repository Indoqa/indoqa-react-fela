import React, {PropTypes} from 'react'
import {Provider, ThemeProvider} from 'react-fela'

import {createRenderer} from './createRenderer'
import {createMountNode} from './createMountNode'
import {theme} from './theme'

const cascadeThemes = (themes, content) => {
  if (themes.length === 0) {
    return content
  }

  const nextTheme = themes.shift()

  return (
    <ThemeProvider theme={nextTheme}>
      {cascadeThemes(themes, content)}
    </ThemeProvider>
  )
}
const IndoqaFela = ({customThemes, init, children}) => (
  <Provider renderer={createRenderer(init)} mountNode={createMountNode()}>
    {cascadeThemes([theme, ...customThemes], children)}
  </Provider>
)

IndoqaFela.propTypes = {
  customThemes: PropTypes.array.isRequired,
  init: PropTypes.func,
  children: PropTypes.object.isRequired,
}

IndoqaFela.defaultProps = {
  customThemes: [],
}

export {IndoqaFela}
