import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {FontSize, FontSizes} from '../types'
import TextSample from './TextSample'
import {headerText, longText, shortText} from './TextSpecimen'

interface Props {
  textFont: IStyle,
  headlineFont: IStyle,
  fontSizes: FontSizes
  textFontSize: FontSize,
}

const Container: React.FC = ({children}) => {
  const style: IStyle = {
    maxWidth: 650,
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

const FontMixContent: React.FC<Props> = ({textFont, headlineFont, fontSizes, textFontSize}) => {
  const extendedHeadline1Font: IStyle = {
    ...headlineFont,
    fontSize: fontSizes.length > 0 ? fontSizes[0] : '30px',
  }
  const extendedHeadline2Font: IStyle = {
    ...headlineFont,
    fontSize: fontSizes.length > 1 ? fontSizes[1] : '24px',
  }
  const extendedHeadline3Font: IStyle = {
    ...headlineFont,
    fontSize: fontSizes.length > 2 ? fontSizes[2] : '18px',
  }
  const extendedTextFont: IStyle = {
    ...textFont,
    fontSize: textFontSize ? textFontSize : '14px',
  }

  return (
    <Container>
      <TextSample fontStyles={extendedHeadline1Font} as="h1">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {longText}
      </TextSample>
      <TextSample fontStyles={extendedHeadline2Font} as="h2">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {shortText}
      </TextSample>
      <TextSample fontStyles={extendedHeadline3Font} as="h3">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {longText}
      </TextSample>
      <TextSample fontStyles={extendedHeadline3Font} as="h3">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {shortText}
      </TextSample>
      <TextSample fontStyles={extendedHeadline2Font} as="h2">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {longText}
      </TextSample>
      <TextSample fontStyles={extendedHeadline1Font} as="h1">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {shortText}
      </TextSample>
    </Container>
  )
}

export default FontMixContent
