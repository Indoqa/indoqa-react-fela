import {createComponentWithProxy} from 'react-fela'
import {flexChild, FlexChildProps, FontProps, fonts, MarginProps, margins, PaddingProps, paddings} from './base'

export declare interface TextProps extends MarginProps, PaddingProps, FlexChildProps, FontProps {
}

const Text = (props: TextProps) => ({
  display: 'inline-block',
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})

export default createComponentWithProxy(Text, 'span')
