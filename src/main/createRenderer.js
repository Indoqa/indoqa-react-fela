import {createRenderer as createFelaRenderer} from 'fela'
import presetWeb from 'fela-preset-web'

import resetCss from './reset.css.js'

export const createRenderer = (init = () => {}) => {
  const felaRenderer = createFelaRenderer({
    plugins: [
      ...presetWeb
    ],
  })

  felaRenderer.renderStatic(resetCss)

  init(felaRenderer)

  return felaRenderer
}
