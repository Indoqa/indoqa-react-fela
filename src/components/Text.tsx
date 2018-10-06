import {createComponentWithProxy} from 'react-fela'
import {flexChild, FlexChildProps, FontProps, fonts, MarginProps, margins, PaddingProps, paddings} from './base'

export declare interface TextProps extends MarginProps, PaddingProps, FlexChildProps, FontProps {
}

const TextStyle = (props: TextProps) => ({
  display: 'inline-block',
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})

export const Text = createComponentWithProxy(TextStyle, 'span')
