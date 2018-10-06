import {createRenderer as createFelaRenderer} from 'fela'

import resetCssStyles from './reset.css'

const DEFAULT_CONFIG = {
  plugins: [],
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
