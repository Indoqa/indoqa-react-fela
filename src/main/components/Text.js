import {createComponentWithProxy} from 'react-fela'
import {flexChild, fonts, margins, paddings} from './base'

const Text = (props) => ({
  display: 'inline-block',
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})

export default createComponentWithProxy(Text, 'span')
