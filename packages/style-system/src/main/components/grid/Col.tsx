import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../..'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'
import {addUnitIfNeeded} from './utils'

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export const GRID_SIZE: Size = 12

interface Props {
  rowBreak?: boolean,
}

interface ColManipulatedProps extends Props {
  marginTop?: string | number,
  size?: Size,
  children: React.ReactNode
}

interface RowContainerProps extends Props {
  spacing?: number | string,
}

export class Col extends React.Component<Props> {

  public static defaultProps = {
    rowBreak: false,
    size: GRID_SIZE,
    marginTop: 0,
  }

  public render() {
    const internalProps = this.props as ColManipulatedProps
    const {children, rowBreak, marginTop, size} = internalProps
    const effectiveSize: number = size ? size : 12
    const colStyle: StyleFunction<BaseTheme, RowContainerProps> = ({spacing}): IStyle => {
      const marginRight = rowBreak ? '0px' : spacing
      const spacingWithUnit = addUnitIfNeeded(spacing)
      const availableSpace = `(100% - ${spacingWithUnit} * ${GRID_SIZE - 1})`
      const coveredSpacing = `${spacingWithUnit} * ${effectiveSize - 1}`
      return ({
        // evenly distribute the full with considering the spacing:
        width: `calc(${availableSpace} / ${GRID_SIZE} * ${effectiveSize} + ${coveredSpacing})`,
        marginRight,
        marginTop,
      })
    }
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <FelaComponent style={colStyle} spacing={spacing}>
              {children}
            </FelaComponent>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
