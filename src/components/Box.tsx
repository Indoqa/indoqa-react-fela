import {createComponentWithProxy} from 'react-fela'
import {BoxStyleProps, boxStyles} from './base'

const BoxStyle = (props: BoxStyleProps) => ({
  ...boxStyles(props),
})

export const Box = createComponentWithProxy(BoxStyle, 'div')
