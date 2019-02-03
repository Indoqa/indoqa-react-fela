/* tslint:disable */
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme} from '../../theming/baseTheme'
import {createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles, PaddingProps, StylingProps, WithStyle} from '../base'
import {GRID_SIZE} from './Col'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'

interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps {
}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string,
}

interface RowStyle extends IStyle {
  ':first-child': IStyle,
}

class RowContainer<T extends BaseTheme> extends React.Component<RowContainerProps<T>> {

  public render() {
    const rowStyle: StyleFunction<BaseTheme, RowContainerProps<T>> = ({style, spacing, ...otherProps}): RowStyle => ({
      ...createPaddingCSSProps(otherProps),
      ...createStylingCSSProps(otherProps),
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: spacing,
      ':first-child': {
        marginTop: 0,
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

export class ColRow<T extends BaseTheme> extends React.Component<Props<T>> {

  renderChildren(spacing: string | number) {
    let currentRowSize = 0
    let rowsCount = 0

    // see https://mxstbr.blog/2017/02/react-children-deepdive/#looping-over-children
    return React.Children.map(this.props.children, (child) => {
      const currentChild = child as any
      // calculate the sum of all <Col> sizes
      currentRowSize += currentChild.props.size

      // the <Col> child fills up the full space -> manipulate rowBreak and marginTop
      if (currentRowSize === GRID_SIZE) {
        currentRowSize = 0
        rowsCount++
        return React.cloneElement((currentChild), {
          rowBreak: true,
          marginTop: rowsCount > 1 ? spacing : 0
        })
      }

      // increase the row count if the current <Col> will be rendered at the next line
      if (currentRowSize >= GRID_SIZE) {
        rowsCount++
      }

      // for all rows except the first manipulate the marginTop of the <Col> child
      if (rowsCount > 0) {
        return React.cloneElement((currentChild), {
          marginTop: spacing
        })
      }
      return currentChild
    })
  }

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <RowContainer spacing={spacing} {...this.props}>
              {this.renderChildren(spacing)}
            </RowContainer>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
