import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme} from '../baseTheme'
import {flexChild, fonts, margins, paddings, TextProps} from './base'

export const textRules = (props: TextProps): React.CSSProperties => ({
  display: 'inline-block',
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})

export const Text = ({children, ...rest}: TextProps) => {
  return (
    <FelaComponent<TextProps, BaseTheme> rule={textRules} {...rest} render="span">
      {children}
    </FelaComponent>
  )
}

