import {createRenderer as createFelaRenderer} from 'fela'
import presetWeb from 'fela-preset-web'

export const createRenderer = (initAppSpecifics = () => {}) => {
  const felaRenderer = createFelaRenderer({
    plugins: [
      ...presetWeb
    ],
  })

  felaRenderer.renderStatic(require('reset.css/reset.css'))

  initAppSpecifics(felaRenderer)

  return felaRenderer
}
