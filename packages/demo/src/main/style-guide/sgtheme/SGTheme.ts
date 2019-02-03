import {IStyle} from 'fela'

export interface SGTheme {
  colors: {
    primary: string,
    primaryDark: string,
    primaryLight: string,
    background: string,
    text: string,
    textInverted: string,
  }
  fontFamilyCSSImports: string,
  fontStyles: {
    base: IStyle,
    headline: IStyle,
  }
  fontSizes: {
    text: number | string,
    big: number | string,
    veryBig: number | string,
    small: number | string,
    verySmall: number | string,
  }
  spacing: {
    space0: string,
    space1: string,
    space2: string,
    space3: string,
    space4: string,
  },
  layout: {
    topMenuHeight: string,
    colorPanelBorder: string,
  }
}
