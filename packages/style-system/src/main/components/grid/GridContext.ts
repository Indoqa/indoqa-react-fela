import * as React from 'react'

export type Spacing = number | string

type Context = {
  spacing: Spacing,
}

export const GridContext = React.createContext<Context>({
  spacing: 0,
})
