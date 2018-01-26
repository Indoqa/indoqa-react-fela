import {createComponent} from 'react-fela'
import {flexChild, margins, paddings} from './base'

const display = () => ({
  display: 'inline-block',
})

const fonts = ({theme, font, size, color, bold, ellipsis}) => ({
  fontFamily: (font) ? theme.fonts[font] : theme.fonts.text,
  fontSize: (size) ? theme.fontSizes[size] : theme.fontSizes.text,
  color: (color) ? theme.colors[color] : theme.colors.text,
  fontWeight: (bold) ? 700 : 500,
  extend: [{
    condition: ellipsis,
    style: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  }],
})

const Text = (props) => ({
  ...display(),
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})

Text.displayName = 'Text'

export default createComponent(Text, 'span')
