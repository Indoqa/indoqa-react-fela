import * as React from 'react'
import {SGTheme} from './SGTheme'
import {lightTheme} from './sgThemes'

export default React.createContext<SGTheme>(lightTheme)
