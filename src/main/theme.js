const typeScaleFactor = 1.333
const typeScaleBase = 14
const typeScale = (level) => typeScaleBase + (typeScaleFactor * level)

export const theme = {
  fontSizes: {
    text: typeScale(0),
    big: typeScale(1),
    veryBig: typeScale(2),
    small: typeScale(-1),
    verySmall: typeScale(-2),
    h1: typeScale(10),
    h2: typeScale(8),
    h3: typeScale(6),
    h4: typeScale(4),
    h5: typeScale(2),
  },
  colors: {
    text: '#000000',
  },
}
