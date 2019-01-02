import {IRenderer} from 'fela'
import React from 'react'
import {RendererProvider} from 'react-fela'

export type Props = {
  renderer: IRenderer,
  children: React.ReactNode,
}

export class IndoqaFela extends React.Component<Props> {

  public render() {
    return (
      <RendererProvider renderer={this.props.renderer}>
        {this.props.children}
      </RendererProvider>
    )
  }
}
