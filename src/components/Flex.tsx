import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme} from '../baseTheme'
import {boxStyles, FlexProps} from './base'

const align = (center: string | undefined, stretch: boolean | undefined, value: string | undefined) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

export const flexRules = (props: FlexProps): React.CSSProperties => {
  const {inline, direction = 'row', nowrap, center, justifyContent, alignItems, stretch} = props
  return ({
    ...boxStyles(props),
    display: (inline) ? 'inline-flex' : 'flex',
    flexDirection: direction,
    flexWrap: (nowrap) ? 'nowrap' : 'wrap',
    justifyContent: align(center, stretch, justifyContent),
    alignItems: align(center, stretch, alignItems),
  })
}

export const Flex = ({children, ...rest}: FlexProps) => {
  return (
    <FelaComponent<FlexProps, BaseTheme> rule={flexRules} {...rest}>
      {children}
    </FelaComponent>
  )
}
