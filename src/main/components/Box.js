import {createComponentWithProxy} from 'react-fela'
import {margins, paddings, flexChild, fonts} from './base'

const boxModel = ({inline, width, height, fullWidth, fullHeight}) => ({
  display: (inline) ? 'inline' : 'block',
  width: (fullWidth) ? '100%' : width || 'auto',
  height: (fullHeight) ? '100%' : height || 'auto',
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
  ...fonts(props),
})

export default createComponentWithProxy(Box, 'div')
