import merge from 'deepmerge'
import {baseTheme} from './baseTheme.js'

const buildTheme = (customTheme) => {
  return merge(baseTheme, customTheme)
}

export default buildTheme
