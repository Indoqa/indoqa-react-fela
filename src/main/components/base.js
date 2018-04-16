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

export const margins = ({theme, m, mt, mb, ml, mr}) => ({
  margin: spacing(theme, m),
  marginTop: spacing(theme, mt),
  marginBottom: spacing(theme, mb),
  marginLeft: spacing(theme, ml),
  marginRight: spacing(theme, mr),
})

export const paddings = ({theme, p, pt, pb, pl, pr}) => ({
  padding: spacing(theme, p),
  paddingTop: spacing(theme, pt),
  paddingBottom: spacing(theme, pb),
  paddingLeft: spacing(theme, pl),
  paddingRight: spacing(theme, pr),
})

export const flexChild = ({grow, shrink, order, align}) => ({
  flexGrow: grow || 0,
  flexShrink: shrink || 1,
  order: order || null,
  alignSelf: align || null,
})

export const fonts = ({theme, font, size, color, bold, ellipsis}) => ({
  fontFamily: (font) ? theme.fonts[font] : theme.fonts.text,
  fontSize: (size) ? theme.fontSizes[size] : theme.fontSizes.text,
  color: (color) ? theme.colors[color] : theme.colors.text,
  fontWeight: (bold) ? 700 : 500,
  extend: [{
    condition: ellipsis,
    style: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  }],
})
