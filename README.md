# indoqa-react-fela

An opinionated starting point we use to include [fela](https://github.com/rofrischmann/fela) in [our](https://indoqa.com) React projects. It covers:

* A preconfigured React component that handles `createRenderer` and `mountNode`.
* Theming support by providing a base theme and a function to merge themes.
* Basic components like Box, Flex and Text.

## Usage

To activate the standard preconfigured fela setup, just wrap your application in `<IndoqaFela>` without any further options:

```javascript
import React from 'react'
import {render} from 'react-dom'
import {IndoqaFela} from 'indoqa-react-fela'
import DemoApp from './DemoApp.react.js'

const fela = {
  config: {
    plugins: [
      ...presetWeb
    ],
  },
  init: (renderer) => {
    renderer.renderStatic('html, body, #app {height: 100%}')
  },
  resetCss: true,
}

render(
  <IndoqaFela fela={fela}>
    <DemoApp />
  </IndoqaFela>,
  document.getElementById('app')
)
```

The [react-fela `<Provider>`](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/Provider.md) creates a `renderer` using the provided `config` object and adds the css to the HTML head section by lazily adding `<style id="fela-stylesheet">` inside `<head>` with support for [hot reloading](https://github.com/rofrischmann/fela/issues/125).

Please not that wrapping `<IndoqaFela>` around a Redux store might cause problems with hot-reloading because a Redux store must not be recreated.

### config

  * Provide a [renderer configuration](https://github.com/rofrischmann/fela/blob/master/docs/advanced/RendererConfiguration.md).
  * The default configuration uses (FelaPresetWeb)(https://github.com/rofrischmann/fela/tree/master/packages/fela-preset-web).

### init

  * Get access to the renderer after it is being created.
  * The default value is a nop function.

### resetCss

  * If set to true, [reset.css](https://meyerweb.com/eric/tools/css/reset/) is applied as static css to start clean.
  * The default value is `true`.

### Theming

IndoqaFela provides a `buildTheme(customTheme)` function. The custom theme will be merged with the basic theme using [deepmerge](https://github.com/KyleAMathews/deepmerge).

## Demo

This package comes with a simple demo app in `src/playground`. Use `yarn start` and point your browser to http://localhost:3000
