import React from 'react'
import {IRenderer} from 'fela'
import {Provider as FelaProvider} from 'react-fela'

export type Props = {
  renderer: IRenderer,
  children: React.ReactNode,
}

export class IndoqaFela extends React.Component<Props> {

  public render() {
    return (
      <FelaProvider renderer={this.props.renderer} rehydrate={false}>
        {this.props.children}
      </FelaProvider>
    )
  }
}
