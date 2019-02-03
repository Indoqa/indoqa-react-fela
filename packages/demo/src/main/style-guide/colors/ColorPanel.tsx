import {IStyle} from 'fela'
import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface Props extends WithSGTheme {
  color?: string,
  name: string,
}

const toHexString = (color: string) => {
  return color.startsWith('#') ? color.substr(1) : color
}

/* tslint:disable:no-bitwise */
// tslint:disable-next-line
/* see https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color */
const calcTextColor = (color?: string) => {
  if (!color) {
    return '#fff'
  }
  const bigint = parseInt(toHexString(color), 16)
  const red = (bigint >> 16) & 255
  const green = (bigint >> 8) & 255
  const blue = bigint & 255
  return (red * 0.299 + green * 0.587 + blue * 0.114) > 180 ? '#000' : '#fff'
}

const ColorPanel = ({color, name, sgTheme}: Props) => {
  const textColor = calcTextColor(color)
  const style: IStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '12rem',
    height: '7rem',
    backgroundColor: color,
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: sgTheme.spacing.space1,
    marginRight: sgTheme.spacing.space2,
    marginBottom: sgTheme.spacing.space2,
    borderRadius: '3px',
    border: sgTheme.layout.colorPanelBorder,
  }
  return (
    <FelaComponent style={style}>
      <Box
        style={{
          ...sgTheme.fontStyles.base,
          color: textColor,
          fontSize: sgTheme.fontSizes.small,
          marginBottom: 'auto',
        }}
      >
        {name}
      </Box>
      <Box
        style={{
          ...sgTheme.fontStyles.base,
          color: textColor,
          fontSize: sgTheme.fontSizes.verySmall,
        }}
      >
        {color}
      </Box>
    </FelaComponent>
  )
}

export default withSGTheme(ColorPanel)
