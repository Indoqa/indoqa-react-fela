import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'

interface Props extends WithSGTheme {
  name: string,
}

const Header: React.FunctionComponent<WithSGTheme> = ({sgTheme, children}) => {
  const style: IStyle = {
    backgroundColor: sgTheme.colors.primaryLight,
    textTransform: 'uppercase',
    ...sgTheme.fontStyles.headline,
    fontSize: sgTheme.fontSizes.small,
    color: sgTheme.colors.primaryDark,
    padding: sgTheme.spacing.space2,
    borderRadius: '1px',
    marginBottom: sgTheme.spacing.space2,
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const Container: React.FC<WithSGTheme> = ({sgTheme, children}) => {
  const style: IStyle = {
    backgroundColor: sgTheme.colors.background,
    borderRadius: '3px',
    marginBottom: '2rem',
    width: '100%',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const Content: React.FC<WithSGTheme> = ({sgTheme, children}) => {
  const style: IStyle = {
    paddingLeft: sgTheme.spacing.space2,
    paddingTop: sgTheme.spacing.space2,
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const FontStylePanel: React.FC<Props> = ({sgTheme, name, children}) => {
  return (
    <Container sgTheme={sgTheme}>
      <Header sgTheme={sgTheme}>{name}</Header>
      <Content sgTheme={sgTheme}>{children}</Content>
    </Container>
  )
}

export default withSGTheme(FontStylePanel)
