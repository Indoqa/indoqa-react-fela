import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../baseTheme'
import {
  BoxProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  filterProps,
  FlexProps,
  mergeThemedStyles,
  TextProps,
  WithStyle,
} from './base'

const themedTextStyle: StyleFunction<BaseTheme, TextProps> = (props: TextProps): IStyle => ({
  display: 'inline-block',
  ...createMarginCSSProps(props),
  ...createPaddingCSSProps(props),
  ...createFlexChildCSSProps(props),
  ...createFontCSSProps(props),
})

export class Text<T extends BaseTheme> extends React.Component<TextProps & WithStyle<T> & React.HTMLAttributes<HTMLSpanElement>> {

  public render() {
    const {children, style, ...rest} = this.props
    const styles = mergeThemedStyles<T, BoxProps>(themedTextStyle, style)
    return (
      <FelaComponent<T, FlexProps> style={styles} {...rest}>
        {({className}) => (
          <span className={className} {...filterProps(rest)}>
            {children}
          </span>
        )}
      </FelaComponent>
    )
  }
}
