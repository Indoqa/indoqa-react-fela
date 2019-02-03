import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import Heading from '../Heading'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface Props extends WithSGTheme {
  name?: string,
}

const List: React.FC = ({children}) => {
  const style: IStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }
  return (
    <FelaComponent style={style} as="ul">
      {children}
    </FelaComponent>
  )
}

const MenuGroup: React.FC<Props> = ({sgTheme, name, children}) => {
  const style: IStyle = {
    paddingTop: sgTheme.spacing.space2,
    paddingLeft: sgTheme.spacing.space4,
  }
  return (
    <FelaComponent style={style}>
      {name && <Heading as="h3">{name}</Heading>}
      <List>
        {children}
      </List>
    </FelaComponent>
  )
}

export default withSGTheme(MenuGroup)
