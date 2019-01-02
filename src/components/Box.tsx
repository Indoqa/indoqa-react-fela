import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme} from '../baseTheme'
import {
  BoxProps,
  createBoxModelCSSProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
  mergeThemedStyles,
  WithStyle
} from './base'

export const createBoxCSSStyles = (props: BoxProps): IStyle => ({
  ...createBoxModelCSSProps(props),
  ...createMarginCSSProps(props),
  ...createPaddingCSSProps(props),
  ...createFlexChildCSSProps(props),
  ...createStylingCSSProps(props),
  ...createFontCSSProps(props),
})

const themedBoxStyles: StyleFunction<BaseTheme, BoxProps> = (props: BoxProps): IStyle => ({
  ...createBoxCSSStyles(props),
})

export class Box<T extends BaseTheme> extends React.Component<BoxProps & WithStyle<T>> {

  public render() {
    const {children, style, ...rest} = this.props
    const styles = mergeThemedStyles<T, BoxProps>(themedBoxStyles, style)
    return (
      <FelaComponent<T, BoxProps> style={styles} {...rest}>
        {children}
      </FelaComponent>
    )
  }
}
