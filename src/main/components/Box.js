import {createComponentWithProxy} from 'react-fela'
import {boxStyles} from './base'

const Box = (props) => ({
  ...boxStyles(props),
})

export default createComponentWithProxy(Box, 'div')
