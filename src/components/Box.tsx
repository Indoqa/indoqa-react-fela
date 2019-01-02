import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme} from '../baseTheme'
import {BoxProps, boxStyles, mergeThemedStyles, WithStyle} from './base'

export const boxStyle: StyleFunction<BaseTheme, BoxProps> = (props: BoxProps): IStyle => ({
  ...boxStyles(props),
})

export class Box<T extends BaseTheme> extends React.Component<BoxProps & WithStyle<T>> {

  public render() {
    const {children, style, ...rest} = this.props
    const styles = mergeThemedStyles<T, BoxProps>(boxStyle, style)
    return (
      <FelaComponent<T, BoxProps> style={styles} {...rest}>
        {children}
      </FelaComponent>
    )
  }
}

//
// interface Layout {
//   readonly actionBarHeight: number,
//   readonly menuWidth: number,
// }
//
// interface MyTheme extends BaseTheme {
//   layout: Layout,
// }
//
// export const foo = () => {
//   const style: StyleFunction<MyTheme, BoxProps> = ({theme}): IStyle => {
//     return {
//       margin: theme.spacing.space2,
//       border: theme.layout.actionBarHeight,
//     }
//   }
//   const x = (
//     <Box mx={2} style={style}>abc</Box>
//   )
//   return x
// }
