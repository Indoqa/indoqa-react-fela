# indoqa-react-fela
An opinionated starting point we use to include [fela](https://github.com/rofrischmann/fela) in our react projects. It covers

* A preconfigured react setup as higher-order component that handles createRenderer and mountNode.
* Theming support including a base theme.
* Basic components like Box and Text.

## Usage

### Fela setup

To activate the standard preconfigured fela setup, just wrap your application in `<IndoqaFela>` without any further options: 
```javascript
import React from 'react'
import {render} from 'react-dom'
import {IndoqaFela} from 'indoqa-react-fela'
import DemoApp from './DemoApp.react.js'

render(
  <IndoqaFela>
    <DemoApp />
  </IndoqaFela>,
  document.getElementById('app')
)
```

This wraps the application in a [react-fela `<Provider>`](https://github.com/rofrischmann/fela/blob/master/packages/react-fela/docs/Provider.md) with `renderer` and `mountNode` properties configured like this:
* createRenderer with [web presets](https://github.com/rofrischmann/fela/tree/master/packages/fela-preset-web)
* [reset.css](https://meyerweb.com/eric/tools/css/reset/) as static css to start clean
* mountNode as lazy initialied `<style id="fela-stylesheet">` inside `<head>` with support for [hot reloading](https://github.com/rofrischmann/fela/issues/125)

### Theming

IndoqaFela comes with a basic theme that is automatically applied after `<Provider>`. Use the `customTheme` property to provide a custom theme for your application.
Custom theme and basic theme will be combinded using [deepmerge](https://github.com/KyleAMathews/deepmerge),
```
## Demo
 
This package comes with a simple demo app in `src/playground`. Use `npm start` and point your browser to http://localhost:3000
