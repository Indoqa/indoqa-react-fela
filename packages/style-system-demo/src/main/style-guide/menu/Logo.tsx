import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Link} from 'react-router-dom'
import Heading from '../Heading'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface Props extends WithSGTheme {
  to: string,
}

interface MenuLinkStyle extends IStyle {
  '> a': IStyle,
}

const Logo: React.FC<Props> = ({sgTheme, to, children}) => {
  if (typeof children !== 'string') {
    return (
      <Flex fullWidth justifyContent="center">
        <Link to={to}>
          {children}
        </Link>
      </Flex>
    )
  }

  const style: MenuLinkStyle = {
    listStyle: 'none',
    paddingLeft: sgTheme.spacing.space3,
    '> a': {
      textDecoration: 'none',
    },
  }
  return (
    <FelaComponent style={style}>
      <Link to={to}>
        <Heading as="h1">
          {children}
        </Heading>
      </Link>
    </FelaComponent>
  )
}

export default withSGTheme(Logo)
