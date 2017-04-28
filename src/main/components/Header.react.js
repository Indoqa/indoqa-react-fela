import {Text as _Text} from 'kilvin'
import {createComponent} from 'react-fela'

const fontSize = (theme, level) => {
  switch (level) {
    case 1:
      return theme.fontSizes.h1
    case 2:
      return theme.fontSizes.h2
    case 3:
      return theme.fontSizes.h3
    case 4:
      return theme.fontSizes.h4
    case 5:
      return theme.fontSizes.h5
    default:
      return theme.fontSizes.text
  }
}

const text = ({theme, level}) => ({
  fontSize: fontSize(theme, level),
})

export const Header = createComponent(text, _Text)
