import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {ThemeProvider} from 'react-fela'

import {IndoqaFela, Box, buildTheme} from '../main/'

import theme from './theme.js'

import Content from './components/Content.fela.js'
import Menu from './components/Menu.fela.js'
import MenuLabel from './components/MenuLabel.fela.js'
import View from './components/View.fela.js'

import BoxPage from './pages/Box.react.js'
import FlexPage from './pages/Flex.react.js'
import TextPage from './pages/Text.react.js'

const renderDemo = () => {
  render(
    <IndoqaFela>
      <ThemeProvider theme={buildTheme(theme)}>
        <Router>
          <View>
            <Menu>
              indoqa. fela
              <MenuLabel>components</MenuLabel>
              <Box> <Link to="/components/box"> Box </Link> </Box>
              <Box> <Link to="/components/flex"> Flex </Link> </Box>
              <Box> <Link to="/components/text"> Text </Link> </Box>
            </Menu>
            <Content>
              <Route exact path="/" component={BoxPage} />
              <Route exact path="/components/box" component={BoxPage} />
              <Route exact path="/components/flex" component={FlexPage} />
              <Route exact path="/components/text" component={TextPage} />
            </Content>
          </View>
        </Router>
      </ThemeProvider>
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
