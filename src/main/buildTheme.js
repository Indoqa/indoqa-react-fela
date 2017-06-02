import merge from 'deepmerge'
import {theme as baseTheme} from '../fela/theme'

const buildTheme = (customTheme) => {
  return merge(baseTheme, customTheme)
}

export default buildTheme
