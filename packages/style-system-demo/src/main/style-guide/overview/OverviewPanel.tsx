import {Box, Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import ColorsPanel from '../colors/ColorsPanel'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Color, FontMix, FontSize, FontSizes} from '../types'
import FontMixContent from '../typography/FontMixContent'

interface Props extends WithSGTheme {
  colors: Color[],
  fontMixes: FontMix[],
  fontSizes: FontSizes,
  textFontSize: FontSize,
}

const OverviewPanel: React.FC<Props> = ({fontMixes, fontSizes, textFontSize, colors, sgTheme}) => {
  const panelStyle: IStyle = {
    marginTop: sgTheme.spacing.space4,
  }
  const textFont = fontMixes[0].textFont
  const headlineFont = fontMixes[0].headlineFont
  return (
    <Flex fullWidth direction="column">
      <Box>
        <Box>
          <ColorsPanel colors={colors} small/>
        </Box>
        <Box style={panelStyle}>
          <FontMixContent
            textFont={textFont}
            headlineFont={headlineFont}
            fontSizes={fontSizes}
            textFontSize={textFontSize}
          />
        </Box>
      </Box>
    </Flex>
  )
}

export default withSGTheme(OverviewPanel)
