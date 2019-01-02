import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme} from '../baseTheme'
import {BoxProps, boxStyles, FlexProps, mergeThemedStyles, WithStyle} from './base'

const align = (center: string | undefined, stretch: boolean | undefined, value: string | undefined) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

export const flexStyle: StyleFunction<BaseTheme, FlexProps> = (props: FlexProps): IStyle => {
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

export class Flex<T extends BaseTheme> extends React.Component<FlexProps & WithStyle<T>> {

  public render() {
    const {children, style, ...rest} = this.props
    const styles = mergeThemedStyles<T, BoxProps>(flexStyle, style)
    return (
      <FelaComponent<T, FlexProps> style={styles} {...rest}>
        {children}
      </FelaComponent>
    )
  }
}
