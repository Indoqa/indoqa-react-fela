import {IStyle} from 'fela'
import {FelaStyle, StyleFunction} from 'react-fela'
import {BaseTheme} from '../baseTheme'

export interface BoxModelProps {
  inline?: boolean,
  width?: number | string,
  height?: number | string,
  fullWidth?: boolean,
  fullHeight?: boolean,
}

export interface BoxProps extends MarginProps,
  PaddingProps,
  FlexChildProps,
  FontProps,
  StylingProps,
  BoxModelProps {
}

type Direction = 'column' | 'row'

export interface FlexChildProps {
  grow?: number,
  shrink?: number,
  basis?: number | string,
  order?: number,
  align?: string,
}

export interface FlexContainerProps {
  inline?: boolean,
  direction?: Direction,
  nowrap?: boolean,
  center?: string,
  justifyContent?: string,
  alignItems?: string,
  stretch?: boolean,
}

export interface FlexProps extends BoxProps, FlexContainerProps {
}

export interface FontProps {
  font?: string,
  fontSize?: number | string,
  color?: string,
  bold?: boolean,
  ellipsis?: boolean,
}

export interface MarginProps {
  m?: number,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
  mx?: number,
  my?: number,
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

export interface StylingProps {
  bg?: string,
}

export interface TextProps extends MarginProps, PaddingProps, FlexChildProps, FontProps {
}

interface WithBaseTheme {
  theme?: BaseTheme,
}

export interface WithStyle<T extends BaseTheme> {
  style?: FelaStyle<T>,
}

const THEME_NOT_AVAILABLE_ERR_MSG = 'There is no theme available or one of its properties is missing. ' +
  'Check if the Fela ThemeProvider is configured correctly.'

export const createBoxModelCSSProps = ({inline, width, height, fullWidth, fullHeight}: BoxModelProps) => ({
  display: (inline) ? 'inline' : 'block',
  width: (fullWidth) ? '100%' : width || 'auto',
  height: (fullHeight) ? '100%' : height || 'auto',
})

export const createFlexChildCSSProps = ({grow, shrink, basis, order, align}: FlexChildProps): IStyle => {
  const styles = {
    flexGrow: grow || 0,
    flexShrink: shrink || 1,
    flexBasis: basis || 'auto',
  }
  if (order) {
    Object.assign(styles, {order})
  }
  if (align) {
    Object.assign(styles, {alignSelf: align})
  }
  return styles
}

export const createFontCSSProps = ({theme, font, fontSize, color, bold, ellipsis}: FontProps & WithBaseTheme): IStyle => {
  if (theme === undefined || theme.fonts === undefined || theme.fontSizes === undefined || theme.colors === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles: IStyle = {
    fontFamily: (font) ? theme.fonts[font] : theme.fonts.text,
    fontSize: (fontSize) ? theme.fontSizes[fontSize] : theme.fontSizes.text,
    color: (color) ? theme.colors[color] : theme.colors.text,
    fontWeight: (bold) ? 700 : 400,
  }
  if (ellipsis) {
    const ellipsisStyles: IStyle = {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
    Object.assign(styles, ellipsisStyles)
  }
  return styles
}

export const createMarginCSSProps = ({theme, m, mt, mb, ml, mr, mx, my}: MarginProps & WithBaseTheme) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles = {}
  if (m) {
    Object.assign(styles, {margin: createSpacingCSSProps(theme, m)})
  }
  if (mx) {
    Object.assign(styles, {marginLeft: createSpacingCSSProps(theme, mx)})
    Object.assign(styles, {marginRight: createSpacingCSSProps(theme, mx)})
  }
  if (my) {
    Object.assign(styles, {marginTop: createSpacingCSSProps(theme, my)})
    Object.assign(styles, {marginBottom: createSpacingCSSProps(theme, my)})
  }
  if (mt) {
    Object.assign(styles, {marginTop: createSpacingCSSProps(theme, mt)})
  }
  if (mb) {
    Object.assign(styles, {marginBottom: createSpacingCSSProps(theme, mb)})
  }
  if (ml) {
    Object.assign(styles, {marginLeft: createSpacingCSSProps(theme, ml)})
  }
  if (mr) {
    Object.assign(styles, {marginRight: createSpacingCSSProps(theme, mr)})
  }
  return styles
}

export const createPaddingCSSProps = ({theme, p, pt, pb, pl, pr, px, py}: PaddingProps & WithBaseTheme) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles = {}
  if (p) {
    Object.assign(styles, {padding: createSpacingCSSProps(theme, p)})
  }
  if (px) {
    Object.assign(styles, {paddingLeft: createSpacingCSSProps(theme, px)})
    Object.assign(styles, {paddingRight: createSpacingCSSProps(theme, px)})
  }
  if (py) {
    Object.assign(styles, {paddingTop: createSpacingCSSProps(theme, py)})
    Object.assign(styles, {paddingBottom: createSpacingCSSProps(theme, py)})
  }
  if (pt) {
    Object.assign(styles, {paddingTop: createSpacingCSSProps(theme, pt)})
  }
  if (pb) {
    Object.assign(styles, {paddingBottom: createSpacingCSSProps(theme, pb)})
  }
  if (pl) {
    Object.assign(styles, {paddingLeft: createSpacingCSSProps(theme, pl)})
  }
  if (pr) {
    Object.assign(styles, {paddingRight: createSpacingCSSProps(theme, pr)})
  }
  return styles
}

const createSpacingCSSProps = (theme: BaseTheme, propValue: number) => {
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

export const createStylingCSSProps = ({theme, bg}: StylingProps & WithBaseTheme) => {
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

export function mergeThemedStyles<T extends BaseTheme, P>(
  componentStyle: StyleFunction<T, P> | IStyle, passedStyle?: FelaStyle<T, P>): FelaStyle<T, P> {

  if (!passedStyle) {
    return componentStyle
  }

  if (passedStyle instanceof Array) {
    return [componentStyle, ...passedStyle]
  }

  return [componentStyle, passedStyle]
}
