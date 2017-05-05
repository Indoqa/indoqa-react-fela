import {createComponent} from 'react-fela'

const spacing = (theme, propValue) => {
  if (!propValue) {
    return null
  }

  switch (propValue) {
    case 1: return theme.spacing.space1
    case 2: return theme.spacing.space2
    case 3: return theme.spacing.space3
    case 4: return theme.spacing.space4
    default: return theme.spacing.space0
  }
}

const Base = ({theme, m, mt, mb, ml, mr, p, pt, pb, pl, pr, grow, shrink, order, align}) => ({
  margin: spacing(theme, m),
  marginTop: spacing(theme, mt),
  marginBottom: spacing(theme, mb),
  marginLeft: spacing(theme, ml),
  marginRight: spacing(theme, mr),
  padding: spacing(theme, p),
  paddingTop: spacing(theme, pt),
  paddingBottom: spacing(theme, pb),
  paddingLeft: spacing(theme, pl),
  paddingRight: spacing(theme, pr),
  flexGrow: grow || 0,
  flexShrink: shrink || 1,
  order: order || null,
  alignSelf: align || null,
})

export default createComponent(Base)
