import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import GridContext from './GridContext'

interface Props {
  height?: number | string,
  minHeight?: number | string,
}

interface RowContainerProps extends Props {
  spacing?: number | string,
}

interface RowStyle extends IStyle {
  ':not(:first-child)': React.CSSProperties,
  '@media (min-width: 768px)': IStyle,
}

const RowContainer: React.FunctionComponent<RowContainerProps> = ({children, minHeight, spacing, height}) => {
  const rowStyle: RowStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    // wrap all flex items -> since a panel has a mobile width of 100%, each
    // panel visually gets its own row
    flexWrap: 'wrap',
    // let all content items (= panels) claim the full space
    alignItems: 'stretch',
    width: '100%',
    minHeight,
    ':not(:first-child)': {
      marginTop: spacing,
    },
    '@media (min-width: 768px)': {
      flexWrap: 'nowrap',
      height,
    },
  }
  return (
    <FelaComponent style={rowStyle}>
      {children}
    </FelaComponent>
  )
}

export class Row extends React.Component<Props> {

  public static defaultProps = {
    height: 'auto',
    minHeight: 'auto',
  }

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => (
          <RowContainer spacing={spacing} {...this.props}>
            {this.props.children}
          </RowContainer>
        )}
      </GridContext.Consumer>
    )
  }
}
