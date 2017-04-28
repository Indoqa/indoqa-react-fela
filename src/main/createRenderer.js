import {createRenderer as createFelaRenderer} from 'fela'
import presetWeb from 'fela-preset-web'

export const createRenderer = (initAppSecifics) => {
  const felaRenderer = createFelaRenderer({
    plugins: [
      ...presetWeb
    ]
  })
  
  felaRenderer.renderStatic(require('reset.css/reset.css'))

  if (typeof initAppSecifics === 'function') {
    initAppSecifics(felaRenderer)
  }
  
  return felaRenderer
}