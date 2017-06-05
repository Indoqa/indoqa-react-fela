import {createRenderer as createFelaRenderer} from 'fela'
import presetWeb from 'fela-preset-web'

import resetCssStyles from './reset.css.js'

const DEFAULT_CONFIG = {
  plugins: [
    ...presetWeb
  ],
}

export const createRenderer = ({init = () => {}, config = DEFAULT_CONFIG, resetCss = true}) => {
  const felaRenderer = createFelaRenderer(config)

  if (resetCss) {
    felaRenderer.renderStatic(resetCssStyles)
  }

  init(felaRenderer)

  return felaRenderer
}
