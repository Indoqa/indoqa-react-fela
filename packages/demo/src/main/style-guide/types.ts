import {IStyle} from 'fela'
import * as React from 'react'

export interface ComponentDescription {
  name: string,
  description?: React.ReactNode,
  component: React.ReactNode,
}

export interface Group {
  name: string,
  descriptions: ComponentDescription[]
}

export interface Color {
  name: string,
  hexCode?: string,
}

export interface Font {
  name: string,
  fontStyle: IStyle,
}

export interface FontMix {
  name: string,
  textFont: IStyle,
  headlineFont: IStyle,
}

export type FontSize = string | number | undefined

export type FontSizes = FontSize[]
