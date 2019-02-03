import {createRenderer, IndoqaFela} from 'indoqa-react-fela'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router} from 'react-router'

import App from './app/App'
import fela from './app/fela'
import history from './app/history'

const rootEl = document.getElementById('app')
const renderer = createRenderer(fela)

ReactDOM.render(
  <IndoqaFela renderer={renderer}>
    <Router history={history}>
      <App/>
    </Router>
  </IndoqaFela>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App.tsx').default
    ReactDOM.render(
      <IndoqaFela renderer={renderer}>
        <Router history={history}>
          <NextApp/>
        </Router>
      </IndoqaFela>,
      rootEl,
    )
  })
}
