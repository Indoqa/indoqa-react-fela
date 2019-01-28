import * as React from 'react'

type Context = {
  spacing: number | string,
}

export const GridContext = React.createContext<Context>({
  spacing: 0,
})
