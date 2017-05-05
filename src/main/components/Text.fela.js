import {createComponent} from 'react-fela'
import Base from './Base.fela'

const Text = (props) => ({
  display: (props.inline) ? 'inline-block' : 'block',
  fontFamily: (props.font) ? props.theme.fonts[props.font] : props.theme.fonts.text,
  fontSize: (props.size) ? props.theme.fontSizes[props.size] : props.theme.fontSizes.text,
  color: props.theme.colors.text,
  fontWeight: (props.bold) ? 700 : 500,

  extend: [{
    condition: props.ellipsis,
    style: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  }],
})

export default createComponent(Text, Base)
