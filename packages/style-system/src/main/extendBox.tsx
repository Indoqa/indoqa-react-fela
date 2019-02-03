import {IStyle} from 'fela'
import {createComponentWithProxy} from 'react-fela'
import {Box} from './components/Box'

export const extendBox = (styles: IStyle) => createComponentWithProxy(styles, Box)
