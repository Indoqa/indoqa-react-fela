import * as React from 'react'
import {SGTheme} from './SGTheme'
import StyleGuideThemeContext from './SGThemeContext'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export interface WithSGTheme {sgTheme: SGTheme}

// see https://github.com/Microsoft/TypeScript/issues/28748
export function withSGTheme<P extends WithSGTheme, R = Omit<P, 'sgTheme'>>(
  Component: React.ComponentClass<P> | React.FC<P>,
): React.FC<R> {
  return function BoundComponent(props: R) {
    return (
      <StyleGuideThemeContext.Consumer>
        {(value) => <Component sgTheme={value} {...(props as any)} />}
      </StyleGuideThemeContext.Consumer>
    )
  }
}
