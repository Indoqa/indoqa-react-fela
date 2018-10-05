import extend from 'fela-plugin-extend'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import unit from 'fela-plugin-unit'
import {createRenderer as createFelaRenderer} from 'fela'

import resetCssStyles from './reset.css'

const DEFAULT_CONFIG = {
  plugins: [
    extend(),
    prefixer(),
    fallbackValue(),
    unit(),
  ],
}

export type CreateRendererParams = {
  init?: any,
  config?: any,
  resetCss?: boolean,
}

const createRenderer = ({init = () => ({}), config = DEFAULT_CONFIG, resetCss = true}: CreateRendererParams) => {
  const felaRenderer = createFelaRenderer(config)

  if (resetCss) {
    felaRenderer.renderStatic(resetCssStyles)
  }

  init(felaRenderer)

  return felaRenderer
}

export default createRenderer
