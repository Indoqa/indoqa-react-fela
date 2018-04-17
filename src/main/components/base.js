const spacing = (theme, propValue) => {
  if (!propValue) {
    throw new Error('A spacing value must not be null.')
  }

  switch (propValue) {
    case 1:
      return theme.spacing.space1
    case 2:
      return theme.spacing.space2
    case 3:
      return theme.spacing.space3
    case 4:
      return theme.spacing.space4
    default:
      return theme.spacing.space0
  }
}

export const margins = ({theme, m, mt, mb, ml, mr}) => {
  const styles = {}
  if (m) {
    Object.assign(styles, {margin: spacing(theme, m)})
  }
  if (mt) {
    Object.assign(styles, {marginTop: spacing(theme, mt)})
  }
  if (mb) {
    Object.assign(styles, {marginBottom: spacing(theme, mb)})
  }
  if (ml) {
    Object.assign(styles, {marginLeft: spacing(theme, ml)})
  }
  if (mr) {
    Object.assign(styles, {marginRight: spacing(theme, mr)})
  }
  return styles
}

export const paddings = ({theme, p, pt, pb, pl, pr}) => {
  const styles = {}
  if (p) {
    Object.assign(styles, {padding: spacing(theme, p)})
  }
  if (pt) {
    Object.assign(styles, {paddingTop: spacing(theme, pt)})
  }
  if (pb) {
    Object.assign(styles, {paddingBottom: spacing(theme, pb)})
  }
  if (pl) {
    Object.assign(styles, {paddingLeft: spacing(theme, pl)})
  }
  if (pr) {
    Object.assign(styles, {paddingRight: spacing(theme, pr)})
  }
  return styles
}

export const flexChild = ({grow, shrink, order, align}) => {
  const styles = {
    flexGrow: grow || 0,
    flexShrink: shrink || 1,
  }
  if (order) {
    Object.assign(styles, {order})
  }
  if (order) {
    Object.assign(styles, {alignSelf: align})
  }
  return styles
}

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

export const boxModel = ({inline, width, height, fullWidth, fullHeight}) => ({
  display: (inline) ? 'inline' : 'block',
  width: (fullWidth) ? '100%' : width || 'auto',
  height: (fullHeight) ? '100%' : height || 'auto',
})

export const styling = ({theme, bg}) => ({
  backgroundColor: (bg) ? theme.colors[bg] : 'transparent',
})
