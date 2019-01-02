import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../baseTheme'
import {BoxProps, flexChild, FlexProps, fonts, margins, mergeThemedStyles, paddings, TextProps, WithStyle} from './base'

export const textStyle: StyleFunction<BaseTheme, TextProps> = (props: TextProps): IStyle => ({
  display: 'inline-block',
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})


export class Text<T extends BaseTheme> extends React.Component<TextProps & WithStyle<T>> {

  public render() {
    const {children, style, ...rest} = this.props
    const styles = mergeThemedStyles<T, BoxProps>(textStyle, style)
    return (
      <FelaComponent<T, FlexProps> style={styles} {...rest}>
        {children}
      </FelaComponent>
    )
  }
}

