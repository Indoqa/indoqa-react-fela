import {createComponentWithProxy} from 'react-fela'
import {boxModel, flexChild, fonts, margins, paddings, styling} from './base'

const Box = (props) => ({
  ...boxModel(props),
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...styling(props),
  ...fonts(props),
})

export default createComponentWithProxy(Box, 'div')
