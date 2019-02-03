import {createRenderer as createFelaRenderer} from 'fela'
import {renderResetCss} from '../css/renderResetCss'

const DEFAULT_CONFIG = {
  plugins: [],
}

export type CreateRendererParams = {
  init?: any,
  config?: any,
  resetCss?: boolean,
}

export const createRenderer = ({init = () => ({}), config = DEFAULT_CONFIG, resetCss = true}: CreateRendererParams) => {
  const renderer = createFelaRenderer(config)
  if (resetCss) {
    renderResetCss(renderer)
  }
  init(renderer)
  return renderer
}

