# indoqa-react-fela
An oppinionated starting point we use to include [fela](https://github.com/rofrischmann/fela) in our react projects. It covers

* A preconfigured react setup as higher-order component that handles createRenderer and mountNode.
* Theming support including a base theme.
* Basic components like Box and Text based on [kilvin](https://github.com/rofrischmann/kilvin).

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
* mountNode as lazy initialied `<style id="stylesheet">` inside `<head>` with support for hot reloading

### Theming

IndoqaFela comes with a basic theme that is automatically applied after `<Provider>`. Use the `customTheme` property to add a list of cascading custom themes. This setup

```javascript
import customTheme1 from './custom1.theme.js'
import customTheme2 from './custom2.theme.js'

<IndoqaFela customThemes={[customTheme1]}>
  <DemoApp />
</IndoqaFela>,
```
results in this nested react component hierarchy
```javascript
<Provider renderer=... mountNode=...>
  <ThemeProvider theme="basicTheme">
    <ThemeProvider theme="customTheme1">
      <ThemeProvider theme="customTheme2">
        <DemoApp />
      </ThemeProvider> 
    </ThemeProvider>  
  </ThemeProvider>  
</Provider>,
```
