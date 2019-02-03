import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {SGTheme} from './sgtheme/SGTheme'
import {withSGTheme, WithSGTheme} from './sgtheme/withSGTheme'

type HeadingType = 'h1' | 'h2' | 'h3'

interface Props extends WithSGTheme {
  as: HeadingType
}

const getConcreteStyle = (level: HeadingType, sgTheme: SGTheme) => {
  switch (level) {
    case 'h1': {
      return {
        fontSize: sgTheme.fontSizes.veryBig,
        backgroundColor: sgTheme.colors.primaryDark,
        color: sgTheme.colors.textInverted,
        lineHeight: 1,
        paddingLeft: sgTheme.spacing.space2,
        paddingRight: sgTheme.spacing.space2,
        paddingBottom: sgTheme.spacing.space2,
        paddingTop: sgTheme.spacing.space2,
      }
    }
    case 'h2': {
      return {
        fontSize: sgTheme.fontSizes.big,
        paddingBottom: sgTheme.spacing.space2,
      }
    }
    default: {
      return {
        fontSize: sgTheme.fontSizes.small,
      }
    }
  }
}

const Heading: React.FC<Props> = ({children, sgTheme, as}) => {
  const baseStyle: IStyle = {
    textTransform: 'uppercase',
    margin: 0,
    paddingBottom: sgTheme.spacing.space1,
    marginBottom: sgTheme.spacing.space0,
    color: sgTheme.colors.primaryDark,
  }

  return (
    <FelaComponent style={[baseStyle, sgTheme.fontStyles.headline, getConcreteStyle(as, sgTheme)]} as={as}>
      {children}
    </FelaComponent>
  )
}

export default withSGTheme(Heading)
