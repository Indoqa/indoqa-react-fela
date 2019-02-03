import * as React from 'react'
import {CSSProperties} from 'react'
import {StateType} from 'typesafe-actions'
import {FormsAction} from '../_forms/store/forms.types'
import {TimeAction} from '../_time/store/time.types'

import {WordsAction} from '../_words/store/words.types'

import {services} from './_rootEpic'
import _rootReducer from './_rootReducer'
import {Theme} from './theme'

declare module 'Types' {

  export type RootState = StateType<typeof _rootReducer>
  export type RootAction = FormsAction
    | TimeAction
    | WordsAction
  export type Services = typeof services

  export interface CSSPropertiesWithBreakpointExtensions extends CSSProperties {
    desktop: CSSProperties,
    tablet: CSSProperties,
  }

  export interface WithTheme {
    readonly theme: Theme,
  }

  export interface WithChildren {
    readonly children?: React.ReactNode,
  }

  export interface FelaProps extends WithTheme, WithChildren {
  }
}
