import {IRenderer} from 'fela'
import * as React from 'react'
import {RendererContext} from 'react-fela'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type WithRenderer = {renderer?: IRenderer}

// see https://github.com/Microsoft/TypeScript/issues/28748
export function withRenderer<P extends WithRenderer, R = Omit<P, 'renderer'>>(
  Component: React.ComponentClass<P> | React.FC<P>,
): React.FC<R> {
  return function BoundComponent(props: R) {
    return (
      <RendererContext.Consumer>
        {(value) => <Component renderer={value} {...(props as any)} />}
      </RendererContext.Consumer>
    )
  }
}
