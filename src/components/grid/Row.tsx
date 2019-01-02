import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../../baseTheme'
import {mergeThemedStyles, PaddingProps, paddings, styling, StylingProps, WithStyle} from '../base'

import GridContext from './GridContext'

interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps {
  height?: number | string,
  minHeight?: number | string,
}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string,
}

interface RowStyle extends IStyle {
  ':not(:first-child)': React.CSSProperties,
  '@media (min-width: 768px)': IStyle,
}

class RowContainer<T extends BaseTheme> extends React.Component<RowContainerProps<T>> {

  public render() {
    const rowStyle: StyleFunction<BaseTheme, RowContainerProps<T>> = ({style, minHeight, spacing, height, ...otherProps}): RowStyle => ({
      ...paddings(otherProps),
      ...styling(otherProps),
      display: 'flex',
      boxSizing: 'border-box',
      // wrap all flex items -> since a panel has a mobile width of 100%, each
      // panel visually gets its own row
      flexWrap: 'wrap',
      // let all content items (= panels) claim the full space
      alignItems: 'stretch',
      width: '100%',
      minHeight,
      ':not(:first-child)': {
        marginTop: spacing,
      },
      '@media (min-width: 768px)': {
        flexWrap: 'nowrap',
        height,
      },
    })
    const {children, style, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, RowContainerProps<T>>(rowStyle, style)
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {children}
      </FelaComponent>
    )
  }
}

export class Row<T extends BaseTheme> extends React.Component<Props<T>> {

  public static defaultProps = {
    height: 'auto',
    minHeight: 'auto',
  }

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => (
          <RowContainer spacing={spacing} {...this.props}>
            {this.props.children}
          </RowContainer>
        )}
      </GridContext.Consumer>
    )
  }
}
