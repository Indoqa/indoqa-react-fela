import {createComponentWithProxy} from 'react-fela'
import {BoxStyleProps, boxStyles} from './base'

const Box = (props: BoxStyleProps) => ({
  ...boxStyles(props),
})

export default createComponentWithProxy(Box, 'div')
