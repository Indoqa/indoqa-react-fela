import {Text as _Text} from 'kilvin'
import {createComponent} from 'react-fela'

const fontSize = ({ theme, small, verySmall, big, veryBig }) => {
  if (small) {
    return theme.fontSizes.small
  }

  if (verySmall) {
    return theme.fontSizes.verySmall
  }

  if (big) {
    return theme.fontSizes.big
  }

  if (veryBig) {
    return theme.fontSizes.veryBig
  }

  return theme.fontSizes.text
}

const text = (props) => ({
  fontSize: fontSize(props),
  color: props.theme.colors.text
})

export const Text = createComponent(text, _Text)