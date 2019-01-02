import {IStyle} from 'fela'
import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent} from 'react-fela'
import GridContext from './GridContext'

const DEFAULT_WIDTH = '0%'

interface Props {
  size?: number,
  width?: string | number,
}

interface PanelContainerProps extends Props {
  spacing?: number | string,
}

interface PanelTabletStyle extends IStyle {
  ':not(:last-child)': CSSProperties,
}

interface PanelStyle extends IStyle {
  tablet: PanelTabletStyle,
}

const isDefaultWidth = (width: string | number | undefined) => {
  return !width || width === DEFAULT_WIDTH || width === 0 || width === '0'
}

const addUnitIfNeeded = (value: any | string, propertyUnit: string): string => {
  const valueType = typeof value
  if ((valueType === 'number' || (valueType === 'string' && !isNaN(value))) && value !== 0) {
    return `${value}${propertyUnit}`
  }
  return `${value}`
}

const calcBasis = (
  spacing: number | string | undefined,
  size: number | undefined,
  width: number | string | undefined) => {
  if (width && !isDefaultWidth(width)) {
    return addUnitIfNeeded(width, 'px')
  }
  // if size is zero, give the panel the width it needs,
  if (!size) {
    return 'auto'
  }
  // if there is no explicit width, add the "internal" spacing widths to flex basis
  return `calc(${addUnitIfNeeded(spacing, 'px')} * ${size - 1})`
}

const PanelContainer: React.FunctionComponent<PanelContainerProps> = ({width, size, spacing, children}) => {
  const panelStyle: PanelStyle = {
    display: 'block',
    // mobile is always full width (flexGrow, flexShrink, width)
    flexGrow: 1,
    flexShrink: 0,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    tablet: {
      // either set the width OR participate in the flex grow calculation
      width: 'auto',
      flex: `${isDefaultWidth(width) ? size : 0} 0 ${calcBasis(spacing, size, width)}`,
      ':not(:last-child)': {
        paddingRight: spacing,
      },
    },
  }
  return (
    <FelaComponent style={panelStyle}>
      {children}
    </FelaComponent>
  )
}

export class Panel extends React.Component<Props> {

  public static defaultProps = {
    size: 1,
    width: DEFAULT_WIDTH,
  }

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => (
          <PanelContainer spacing={spacing} {...this.props}>
            {this.props.children}
          </PanelContainer>
        )}
      </GridContext.Consumer>
    )
  }
}
