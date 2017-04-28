import React, {Component, PropTypes} from 'react'
import {Provider, ThemeProvider} from 'react-fela'
import {createRenderer} from './createRenderer'
import {createMountNode} from './createMountNode'
import {theme} from './theme'

const cascadeThemes = (themes, content) => {
  if (themes.length === 0) {
    return content;
  }

  const nextTheme = themes.shift() 

  return (
    <ThemeProvider theme={nextTheme}>
      {cascadeThemes(themes, content)}
    </ThemeProvider>  
  )  
}

export const IndoqaFela = ({customThemes = [], initAppSecifics, children}) => (
  <Provider renderer={createRenderer(initAppSecifics)} mountNode={createMountNode()}>
    {cascadeThemes([theme, ...customThemes], children)}
  </Provider>
)