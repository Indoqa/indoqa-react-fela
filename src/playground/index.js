import React from 'react'
import {render} from 'react-dom'
import DemoApp from './DemoApp.react.js'
import customTheme1 from './custom1.theme.js'
import {IndoqaFela, createRenderer, createMountNode} from '../main/'

const renderDemo = () => {
  render(
    <IndoqaFela customThemes={[customTheme1]}>
      <DemoApp />
    </IndoqaFela>,
    document.getElementById('app')
  )
}

const enableHotReloading = () => {
  if (module.hot) {
    module.hot.accept()
  }
}

const main = () => {
  enableHotReloading()
  renderDemo()
}

main()
