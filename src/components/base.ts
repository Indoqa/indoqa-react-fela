import * as React from 'react'
import {BaseTheme} from '../baseTheme'

const spacing = (theme: BaseTheme, propValue: number) => {
  if (!propValue) {
    throw new Error('A spacing value must not be null.')
  }
  if (theme === undefined || theme.spacing === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }

  switch (propValue) {
    case 1:
      return theme.spacing.space1
    case 2:
      return theme.spacing.space2
    case 3:
      return theme.spacing.space3
    case 4:
      return theme.spacing.space4
    default:
      return theme.spacing.space0
  }
}

interface WithTheme {
  theme?: BaseTheme,
}

interface WithChildren {
  children?: React.ReactNode,
}

export declare interface MarginProps {
  m?: number,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
  mx?: number,
  my?: number,
}

const THEME_NOT_AVAILABLE_ERR_MSG = 'There is no theme available or one of its properties is missing. ' +
  'Check if the Fela ThemeProvider is configured correctly.'

export const margins = ({theme, m, mt, mb, ml, mr, mx, my}: MarginProps & WithTheme) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles = {}
  if (m) {
    Object.assign(styles, {margin: spacing(theme, m)})
  }
  if (mx) {
    Object.assign(styles, {marginLeft: spacing(theme, mx)})
    Object.assign(styles, {marginRight: spacing(theme, mx)})
  }
  if (my) {
    Object.assign(styles, {marginTop: spacing(theme, my)})
    Object.assign(styles, {marginBottom: spacing(theme, my)})
  }
  if (mt) {
    Object.assign(styles, {marginTop: spacing(theme, mt)})
  }
  if (mb) {
    Object.assign(styles, {marginBottom: spacing(theme, mb)})
  }
  if (ml) {
    Object.assign(styles, {marginLeft: spacing(theme, ml)})
  }
  if (mr) {
    Object.assign(styles, {marginRight: spacing(theme, mr)})
  }
  return styles
}

export declare interface PaddingProps {
  p?: number,
  pt?: number,
  pb?: number,
  pl?: number,
  pr?: number,
  px?: number,
  py?: number,
}

export const paddings = ({theme, p, pt, pb, pl, pr, px, py}: PaddingProps & WithTheme) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles = {}
  if (p) {
    Object.assign(styles, {padding: spacing(theme, p)})
  }
  if (px) {
    Object.assign(styles, {paddingLeft: spacing(theme, px)})
    Object.assign(styles, {paddingRight: spacing(theme, px)})
  }
  if (py) {
    Object.assign(styles, {paddingTop: spacing(theme, py)})
    Object.assign(styles, {paddingBottom: spacing(theme, py)})
  }
  if (pt) {
    Object.assign(styles, {paddingTop: spacing(theme, pt)})
  }
  if (pb) {
    Object.assign(styles, {paddingBottom: spacing(theme, pb)})
  }
  if (pl) {
    Object.assign(styles, {paddingLeft: spacing(theme, pl)})
  }
  if (pr) {
    Object.assign(styles, {paddingRight: spacing(theme, pr)})
  }
  return styles
}

export declare interface FlexChildProps {
  grow?: number,
  shrink?: number,
  basis?: number | string,
  order?: number,
  align?: string,
}

export const flexChild = ({grow, shrink, basis, order, align}: FlexChildProps): React.CSSProperties => {
  const styles = {
    flexGrow: grow || 0,
    flexShrink: shrink || 1,
    flexBasis: basis || '0%',
  }
  if (order) {
    Object.assign(styles, {order})
  }
  if (order) {
    Object.assign(styles, {alignSelf: align})
  }
  return styles
}

export declare interface FontProps {
  font?: string,
  size?: number | string,
  color?: string,
  bold?: boolean,
  ellipsis?: boolean,
}

export const fonts = ({theme, font, size, color, bold, ellipsis}: FontProps & WithTheme): React.CSSProperties => {
  if (theme === undefined || theme.fonts === undefined || theme.fontSizes === undefined || theme.colors === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles: React.CSSProperties = {
    fontFamily: (font) ? theme.fonts[font] : theme.fonts.text,
    fontSize: (size) ? theme.fontSizes[size] : theme.fontSizes.text,
    color: (color) ? theme.colors[color] : theme.colors.text,
    fontWeight: (bold) ? 700 : 400,
  }
  if (ellipsis) {
    const ellipsisStyles: React.CSSProperties = {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
    Object.assign(styles, ellipsisStyles)
  }
  return styles
}

export declare interface BoxModelProps {
  inline?: boolean,
  width?: number | string,
  height?: number | string,
  fullWidth?: boolean,
  fullHeight?: boolean,
}

export const boxModel = ({inline, width, height, fullWidth, fullHeight}: BoxModelProps) => ({
  display: (inline) ? 'inline' : 'block',
  width: (fullWidth) ? '100%' : width || 'auto',
  height: (fullHeight) ? '100%' : height || 'auto',
})

export declare interface StylingProps {
  bg?: string,
}

export const styling = ({theme, bg}: StylingProps & WithTheme) => {
  if (theme === undefined || theme.colors === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }

  if (bg === undefined) {
    return {}
  }

  if (bg in theme.colors) {
    return ({
      backgroundColor: (bg) ? theme.colors[bg] : 'transparent',
    })
  }
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`The bg color ${bg} is not available in theme.colors.`)
  }
  return {}
}

export declare interface BoxProps extends MarginProps,
  PaddingProps,
  FlexChildProps,
  FontProps,
  StylingProps,
  BoxModelProps,
  WithChildren {
}

export declare interface TextProps extends MarginProps, PaddingProps, FlexChildProps, FontProps, WithChildren {
}

type Direction = 'column' | 'row'

export declare interface FlexProps extends BoxProps {
  inline?: boolean,
  direction?: Direction,
  nowrap?: boolean,
  center?: string,
  justifyContent?: string,
  alignItems?: string,
  stretch?: boolean,
}

export const boxStyles = (props: BoxProps): React.CSSProperties => ({
  ...boxModel(props),
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...styling(props),
  ...fonts(props),
})
