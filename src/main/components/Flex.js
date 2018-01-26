import {createComponent} from 'react-fela'
import Box from './Box'

const centerProp = (center, stretch, value) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

const Flex = ({inline, direction, nowrap, center, justifyContent, alignItems, stretch}) => ({
  display: (inline) ? 'inline-flex' : 'flex',
  flexDirection: direction || 'row',
  flexWrap: (nowrap) ? 'nowrap' : 'wrap',
  justifyContent: centerProp(center, stretch, justifyContent),
  alignItems: centerProp(center, stretch, alignItems),
})

Flex.displayName = 'Flex'

export default createComponent(Flex, Box)
