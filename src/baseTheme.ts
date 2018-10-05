const typeScaleFactor = 1.333
const typeScaleBase = 14
const standardFont = 'sans-serif'
export const typeScale = (level: number) => typeScaleBase + (typeScaleFactor * level)

export declare interface BaseFontSizes {
  readonly verySmall: number | string,
  readonly small: number | string,
  readonly text: number | string,
  readonly big: number | string,
  readonly veryBig: number | string,
}

export declare interface BaseFonts {
  readonly text: string,
}

export declare interface BaseColors {
  readonly text: string,
}

export declare interface BaseSpacing {
  readonly space0: number | string,
  readonly space1: number | string,
  readonly space2: number | string,
  readonly space3: number | string,
  readonly space4: number | string,
}

export declare interface BaseTheme {
  readonly fontSizes: Partial<BaseFontSizes>,
  readonly fonts: Partial<BaseFonts>,
  readonly colors: Partial<BaseColors>,
  readonly spacing: Partial<BaseSpacing>,
  readonly layout: {},
}

const baseTheme: BaseTheme = {
  fontSizes: {
    text: typeScale(0),
    big: typeScale(1),
    veryBig: typeScale(2),
    small: typeScale(-1),
    verySmall: typeScale(-2),
  },
  fonts: {
    text: standardFont,
  },
  colors: {
    text: '#000000',
  },
  spacing: {
    space0: 0,
    space1: '0.5rem',
    space2: '1rem',
    space3: '2rem',
    space4: '4rem',
  },
  layout: {},
}

export default baseTheme
