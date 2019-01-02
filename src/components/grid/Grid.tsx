import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../../baseTheme'
import {
  BoxModelProps,
  createBoxModelCSSProps,
  createFlexChildCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
  FlexChildProps,
  MarginProps,
  mergeThemedStyles,
  PaddingProps,
  StylingProps,
  WithStyle
} from '../base'

import GridContext from './GridContext'

interface GridContainerStyleProps<T extends BaseTheme> extends WithStyle<T>, PaddingProps, FlexChildProps, StylingProps, BoxModelProps, MarginProps {
  children?: React.ReactNode,
  maxWidth?: number | string,
  center?: boolean,
}

interface Props<T extends BaseTheme> extends GridContainerStyleProps<T> {
  spacing: number | string,
}

class GridContainer<T extends BaseTheme> extends React.Component<GridContainerStyleProps<T>> {

  public render() {
    const gridStyle: StyleFunction<BaseTheme, GridContainerStyleProps<T>> = ({maxWidth, center, ...otherProps}): IStyle => ({
      margin: center ? 'auto' : 0,
      ...createBoxModelCSSProps(otherProps),
      ...createMarginCSSProps(otherProps),
      ...createPaddingCSSProps(otherProps),
      ...createFlexChildCSSProps(otherProps),
      ...createStylingCSSProps(otherProps),
      boxSizing: 'border-box',
      maxWidth,
    })
    const {children, style, center, ...otherProps} = this.props
    if (process.env.NODE_ENV !== 'production') {
      if (center && (otherProps.mx || otherProps.ml || otherProps.mr)) {
        console.warn('The Grid property center is set to true and one of the properties mx, ml or mr is set. ' +
          'This might lead to unexpected behaviour.')
      }
    }
    const styles = mergeThemedStyles<T, GridContainerStyleProps<T>>(gridStyle, style)
    return (
      <FelaComponent<T, GridContainerStyleProps<T>> style={styles} center={center} {...otherProps}>
        {children}
      </FelaComponent>
    )
  }
}

/**
 * Use this grid component for layouts that place multiple components (further called panels) in the same
 * row and you want to distribute the full width amongst them. This implementation is based on the flexbox
 * grow property. The default panel size is 1 which translates to 'flex-grow: 1 0 0%'.
 *
 * The mobile rendering breaks after each panel.
 *
 * The spacing between the rows and panels can be configured by setting the 'spacing' property.
 * Additionally the maxWidth and the center properties so that these simple use cases there is no need
 * for a wrapper component.
 *
 * Complex layouts can be achieved by using Grid components instead of panels.
 *
 * You should only use row components as children of the Grid, and Panel components as children of Row
 * components.
 */
export class Grid<T extends BaseTheme> extends React.Component<Props<T>> {

  public static defaultProps = {
    maxWidth: 'auto',
    center: false,
    spacing: 0,
  }

  public render() {
    const {spacing, ...otherProps} = this.props
    return (
      <GridContainer {...otherProps}>
        <GridContext.Provider value={{spacing}}>
          {this.props.children}
        </GridContext.Provider>
      </GridContainer>
    )
  }
}

