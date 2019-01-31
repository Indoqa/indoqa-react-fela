import * as React from 'react'

import {Spacing} from './GridContext'

export const testGridContext = (spacing: Spacing, child: React.ReactNode) => {
  if (!spacing) {
    if (process.env.NODE_ENV !== 'production') {
      return (
        <div>rendered outside of Grid</div>
      )
    }
    return <div className="grid-context-missing"/>
  }
  return child
}
