import {createComponentWithProxy} from 'react-fela'
import {boxStyles} from './base'

const centerProp = (center, stretch, value) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

const Flex = (props) => {
  const {inline, direction, nowrap, center, justifyContent, alignItems, stretch} = props
  return ({
    ...boxStyles(props),
    display: (inline) ? 'inline-flex' : 'flex',
    flexDirection: direction || 'row',
    flexWrap: (nowrap) ? 'nowrap' : 'wrap',
    justifyContent: centerProp(center, stretch, justifyContent),
    alignItems: centerProp(center, stretch, alignItems),
  })
}

export default createComponentWithProxy(Flex, 'div')
