import {createRenderer as createFelaRenderer} from 'fela'
import presetWeb from 'fela-preset-web'

export const createRenderer = (externalCssFiles = []) => {
  const staticCssFiles = [require('reset.css/reset.css'), ...externalCssFiles]

  const felaRenderer = createFelaRenderer({
    plugins: [
      ...presetWeb
    ]
  })
  
  staticCssFiles.forEach(cssFile => felaRenderer.renderStatic(cssFile))
  
  return felaRenderer
}