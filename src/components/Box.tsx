import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme} from '../baseTheme'
import {BoxProps, boxStyles} from './base'

export const boxRule = (props: BoxProps): React.CSSProperties => ({
  ...boxStyles(props),
})

export const Box = ({children, ...rest}: BoxProps) => {
  return (
    <FelaComponent<BoxProps, BaseTheme> rule={boxRule} {...rest}>
      {children}
    </FelaComponent>
  )
}
