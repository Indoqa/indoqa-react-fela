interface ThemeProps {
  theme?: any
}

interface PaddingProps {
  p?: number,
  pt?: number,
  pb?: number,
  pl?: number,
  pr?: number
}

interface MarginProps {
  m?: number,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number
}

interface FlexChildProps {
  grow?: number,
  shrink?: number,
  order?: number,
  align?: number
}

interface FontProps {
  size?: number,
  font?: string,
  color?: string,
  bold?: boolean,
  ellipsis?: boolean
}

interface TextProps extends ThemeProps, MarginProps, PaddingProps, FlexChildProps, FontProps {
}

interface BoxProps extends ThemeProps, MarginProps, PaddingProps, FlexChildProps {
  inline?: boolean,
  width?: string | number,
  height?: string | number,
  bg: string
}

declare module "indoqa-react-fela" {
  import * as React from 'react';

  class Box extends React.Component<BoxProps, any> {
  }

  class Flex extends React.Component<any, any> {
  }

  class Text extends React.Component<TextProps, any> {
  }

  class IndoqaFela {
  }

  function buildTheme()
}

