import * as React from 'react'

type Context = {
  spacing: number | string,
}

export default React.createContext<Context>({
  spacing: 0,
})
