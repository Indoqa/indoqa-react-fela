import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'

const MenuHeader: React.FC<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: sgTheme.layout.topMenuHeight,
  }
  return (
    <Flex fullWidth style={style} alignItems="center">
      {children}
    </Flex>
  )
}

export default withSGTheme(MenuHeader)
