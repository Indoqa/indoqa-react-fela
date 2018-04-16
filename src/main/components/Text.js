import {createComponentWithProxy} from 'react-fela'
import {flexChild, margins, paddings, fonts} from './base'

const display = () => ({
  display: 'inline-block',
})

const Text = (props) => ({
  ...display(),
  ...margins(props),
  ...paddings(props),
  ...flexChild(props),
  ...fonts(props),
})

export default createComponentWithProxy(Text, 'span')
