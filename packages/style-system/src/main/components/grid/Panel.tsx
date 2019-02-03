/* tslint:disable:max-classes-per-file */
import {IStyle} from 'fela'
import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme} from '../..'
import {
  createFontCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
  FlexContainerProps,
  FontProps,
  mergeThemedStyles,
  PaddingProps,
  StylingProps,
  WithStyle,
} from '../base'
import {createFlexContainerCSSStyle} from '../Flex'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'
import {addUnitIfNeeded} from './utils'

interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps, FontProps, FlexContainerProps {
  size?: number,
  width?: string | number,
}

interface PanelContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string,
}

interface PanelTabletStyle extends IStyle {
  ':not(:last-child)': CSSProperties,
}

interface PanelStyle extends IStyle {
  '@media (min-width: 768px)': PanelTabletStyle,
}

const DEFAULT_WIDTH = '0%'

const isDefaultWidth = (width: string | number | undefined) => {
  return !width || width === DEFAULT_WIDTH || width === 0 || width === '0'
}

const calcBasis = (
  spacing: number | string | undefined,
  size: number | undefined,
  width: number | string | undefined) => {
  if (width && !isDefaultWidth(width)) {
    return addUnitIfNeeded(width)
  }
  // if size is zero, give the panel the width it needs,
  if (!size) {
    return 'auto'
  }
  // if there is no explicit width, add the "internal" spacing widths to flex basis
  return `calc(${addUnitIfNeeded(spacing)} * ${size - 1})`
}

class PanelContainer<T extends BaseTheme> extends React.Component<PanelContainerProps<T>> {

  public render() {
    // tslint:disable-next-line:no-shadowed-variable
    const panelStyle: StyleFunction<BaseTheme, PanelContainerProps<T>> = ({width, size, spacing, ...otherProps}): PanelStyle => ({
      ...createPaddingCSSProps(otherProps),
      ...createFontCSSProps(otherProps),
      ...createStylingCSSProps(otherProps),
      ...createFlexContainerCSSStyle(otherProps),
      // mobile is always full width (flexGrow, flexShrink, width)
      flexGrow: 1,
      flexShrink: 0,
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
      marginTop: spacing,
      '@media (min-width: 768px)': {
        // either set the width OR participate in the flex grow calculation
        width: '0',
        flex: `${isDefaultWidth(width) ? size : 0} 0 ${calcBasis(spacing, size, width)}`,
        ':not(:last-child)': {
          paddingRight: spacing,
        },
      },
    })
    const {style, children, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, PanelContainerProps<T>>(panelStyle, style)
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {children}
      </FelaComponent>
    )
  }
}

export class Panel<T extends BaseTheme> extends React.Component<Props<T>> {

  public static defaultProps = {
    size: 1,
    width: DEFAULT_WIDTH,
  }

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <PanelContainer spacing={spacing} {...this.props}>
              {this.props.children}
            </PanelContainer>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
