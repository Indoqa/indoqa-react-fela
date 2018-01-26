import {createComponent} from 'react-fela'
import {flexChild, margins, paddings} from './base'

const boxModel = ({inline, width, height}) => ({
  display: (inline) ? 'inline' : 'block',
  width: width || 'auto',
  height: height || 'auto',
})

const styling = ({theme, bg}) => ({
  backgroundColor: (bg) ? theme.colors[bg] : 'transparent',
})

const Box = (props) => ({
  ...boxModel(props),
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...styling(props),
})

Box.displayName = 'Box'

export default createComponent(Box, 'div')
