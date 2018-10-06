import {createComponentWithProxy} from 'react-fela'
import {BoxStyleProps, boxStyles} from './base'

const centerProp = (center: string | undefined, stretch: boolean | undefined, value: string | undefined) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

type Direction = 'column' | 'row'

export declare interface FlexProps extends BoxStyleProps {
  inline?: boolean,
  direction?: Direction,
  nowrap?: boolean,
  center?: string,
  justifyContent?: string,
  alignItems?: string,
  stretch?: boolean,
}

const FlexStyle = (props: FlexProps): any => {
  const {inline, direction = 'row', nowrap, center, justifyContent, alignItems, stretch} = props
  return ({
    ...boxStyles(props),
    display: (inline) ? 'inline-flex' : 'flex',
    flexDirection: direction,
    flexWrap: (nowrap) ? 'nowrap' : 'wrap',
    justifyContent: centerProp(center, stretch, justifyContent),
    alignItems: centerProp(center, stretch, alignItems),
  })
}

export const Flex = createComponentWithProxy(FlexStyle, 'div')
