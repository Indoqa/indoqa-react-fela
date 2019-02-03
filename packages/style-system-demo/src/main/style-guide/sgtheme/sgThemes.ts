import {SGTheme} from './SGTheme'

const fontFamilies = {
  base: 'Lato, sans-serif',
  heading: 'Oswald, sans-serif',
}

export const lightTheme: SGTheme = {
  colors: {
    primaryDark: '#868E96',
    primary: '#E9ECEF',
    primaryLight: '#F1F3F5',
    background: '#FFFFFF',
    text: '#495057',
    textInverted: '#FFFFFF',
  },
  fontFamilyCSSImports: 'https://fonts.googleapis.com/css?family=Lato|Oswald:700',
  fontSizes: {
    verySmall: '0.7rem',
    small: '0.8rem',
    text: '0.9rem',
    big: '1.0rem',
    veryBig: '1.2rem',
  },
  fontStyles: {
    base: {
      fontFamily: fontFamilies.base,
      fontSize: '0.9rem',
      lineHeight: 1.2,
    },
    headline: {
      fontFamily: fontFamilies.heading,
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  spacing: {
    space0: '0',
    space1: '0.25rem',
    space2: '0.5rem',
    space3: '1rem',
    space4: '1.5rem',
  },
  layout: {
    topMenuHeight: '5rem',
    colorPanelBorder: 'solid 1px #dedede',
  },
}
