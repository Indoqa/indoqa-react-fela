declare module "react-fela" {
  interface FelaComponentRenderProps<CTheme> {
    className: string;
    theme: CTheme;
  }

  type FelaRuleProps<CTheme, CProps> = {
    theme: CTheme;
  } & {
    [P in keyof CProps]?: CProps[P];
  };

  interface FelaComponentProps<CTheme, CProps> {
    children?: React.ReactNode;
    customClass?: string;
    style?: React.CSSProperties;
    rule?: (ruleProps: FelaRuleProps<CTheme, CProps>) => React.CSSProperties;
    render?: ((renderProps: FelaComponentRenderProps<CTheme>) => React.ReactNode) | keyof React.ReactHTML;
  }

  class FelaComponent<CProps, CTheme> extends React.Component<FelaComponentProps<CTheme, CProps> & CProps> {
  }
}
