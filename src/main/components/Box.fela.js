import {createComponent} from 'react-fela'
import Base from './Base.fela'

const Box = ({theme, bg, width, height}) => ({
  display: 'block',
  width: width || 'auto',
  height: height || 'auto',
  backgroundColor: (bg) ? theme.colors[bg] : 'transparent',
})

export default createComponent(Box, Base)
