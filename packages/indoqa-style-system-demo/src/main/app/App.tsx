import {IRenderer} from 'fela'
import {Box, withRenderer} from 'indoqa-react-fela'
import * as React from 'react'
import {ThemeProvider} from 'react-fela'
import Loadable from 'react-loadable'
import {Route, Switch} from 'react-router-dom'
import ColPage from '../col/ColPage'
import renderBaseCss, {BaseCssProps} from './renderBaseCss'
import theme from './theme'

interface Props {
  renderer?: IRenderer,
}

const baseCssProps: BaseCssProps = {
  spacing: {
    space1: theme.spacing.space1,
    space2: theme.spacing.space2,
  },
  fontSizes: {
    text: theme.fontSizes.text,
    h1: theme.fontSizes.extraBig,
    h2: theme.fontSizes.veryBig,
    h3: theme.fontSizes.big,
  },
  fontStyles: {
    text: theme.fontStyles.text,
    headline: theme.fontStyles.headline,
  },
  links: {
    base: theme.colors.primaryDark,
    hover: theme.colors.primaryDark,
    active: theme.colors.primaryDark,
    visited: theme.colors.primaryDark,
  },
}

const Loading = () => (
  <Box m={2}>Loading ...</Box>
)

const DemoStyleGuide = Loadable({
  loader: () => import('../style-guide/DemoStyleGuide'),
  loading: Loading,
})

class App extends React.Component<Props> {

  public componentDidMount() {
    const {renderer} = this.props
    if (renderer) {
      renderBaseCss(renderer, baseCssProps)
    }
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/col" component={ColPage}/>
          <Route path="/" component={DemoStyleGuide}/>
        </Switch>
      </ThemeProvider>
    )
  }
}

export default withRenderer(App)
