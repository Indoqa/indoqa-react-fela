import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import GridContext from './GridContext'

interface ContainerStyleProps {
  children?: React.ReactNode,
  maxWidth?: number | string,
  center?: boolean,
}

interface Props extends ContainerStyleProps {
  spacing: number | string,
}

const GridContainer = ({children, maxWidth, center}: ContainerStyleProps) => {
  const gridStyle: IStyle = {
    boxSizing: 'border-box',
    maxWidth,
    margin: center ? 'auto' : 0,
  }

  return (
    <FelaComponent style={gridStyle}>
      {children}
    </FelaComponent>
  )
}

/**
 * Use this grid component for layouts that place multiple components (further called panels) in the same
 * row and you want to distribute the full width amongst them. This implementation is based on the flexbox
 * grow property. The default panel size is 1 which translates to 'flex-grow: 1 0 0%'.
 *
 * The mobile rendering breaks after each panel.
 *
 * The spacing between the rows and panels can be configured by setting the 'spacing' property.
 * Additionally the maxWidth and the center properties so that these simple use cases there is no need
 * for a wrapper component.
 *
 * Complex layouts can be achieved by using Grid components instead of panels.
 *
 * You should only use row components as children of the Grid, and Panel components as children of Row
 * components.
 */
export class Grid extends React.Component<Props> {

  public static defaultProps = {
    maxWidth: 'auto',
    center: false,
    spacing: 0,
  }

  public render() {
    const {spacing, ...otherProps} = this.props
    return (
      <GridContainer {...otherProps}>
        <GridContext.Provider value={{spacing}}>
          {this.props.children}
        </GridContext.Provider>
      </GridContainer>
    )
  }
}

