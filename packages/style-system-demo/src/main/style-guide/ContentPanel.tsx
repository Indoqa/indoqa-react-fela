import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from './sgtheme/withSGTheme'

const ContentPanel: React.FC<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    backgroundColor: sgTheme.colors.background,
    overflow: 'auto',
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
  )
}

export default withSGTheme(ContentPanel)
