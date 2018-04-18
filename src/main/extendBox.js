import {createComponentWithProxy} from 'react-fela'
import Box from './components/Box'

const extendBox = (styles) => createComponentWithProxy(styles, Box)

export default extendBox
