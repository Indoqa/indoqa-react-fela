/* tslint:disable */
import {IRenderer, IStyle} from 'fela'

type CssValue = string | number | undefined

export interface BaseCssProps {
  spacing: {
    space1: CssValue,
    space2: CssValue,
  }
  links: {
    base: CssValue,
    hover: CssValue,
    visited: CssValue,
    active: CssValue,
  },
  fontSizes: {
    text: CssValue,
    h1: CssValue,
    h2: CssValue,
    h3: CssValue,
  },
  fontStyles: {
    text: IStyle,
    headline: IStyle,
  },
}

export const renderRebootCss = (renderer: IRenderer, props: BaseCssProps) => {
  // boxSizing
  renderer.renderStatic({
    boxSizing: 'border-box',
  }, ':root')
  renderer.renderStatic({
    boxSizing: 'inherit',
  }, '*, :before, ::after')

  // use the full height of the browser
  renderer.renderStatic({
    height: '100%',
    margin: 0,
    textAlign: 'left',
  }, 'html, body, #app')

  // Bootstrap 4.1.3 Reboot (except boxSizing and links with textDecoration 'underline')
  const rebootCss = `
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
      margin-bottom: 0;
    }
    
    p {
      margin-top: 0;
      margin-bottom: ${props.spacing.space1};
    }
    
    abbr[title],
    abbr[data-original-title] {
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
      cursor: help;
      border-bottom: 0;
    }
    
    address {
      margin-bottom: ${props.spacing.space1};
      font-style: normal;
      line-height: inherit;
    }
    
    ol,
    ul,
    dl {
      margin-top: 0;
      margin-bottom: ${props.spacing.space1};
    }
    
    ol ol,
    ul ul,
    ol ul,
    ul ol {
      margin-bottom: 0;
      padding-left: calc(${props.spacing.space1} + ${props.spacing.space2});
    }
    
    dt {
      font-weight: 700;
    }
    
    dd {
      margin-bottom: ${props.spacing.space1};
      margin-left: 0;
    }
    
    blockquote {
      margin: 0 0 ${props.spacing.space2};
    }
    
    dfn {
      font-style: italic;
    }
    
    b,
    strong {
      font-weight: bolder;
    }
    
    small {
      font-size: 80%;
    }
    
    sub,
    sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }
    
    sub {
      bottom: -.25em;
    }
    
    sup {
      top: -.5em;
    }
    
    a {
      color: ${props.links.base};
      text-decoration: underline;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }
    
    a:hover {
      color: ${props.links.hover};
      text-decoration: underline;
    }

    a:active {
      color: ${props.links.active};
      text-decoration: underline;
    }
    
    a:visited {
      color: ${props.links.visited};
      text-decoration: underline;
    }
    
    a:not([href]):not([tabindex]) {
      color: inherit;
      text-decoration: none;
    }
    
    a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
      color: inherit;
    }
    
    a:not([href]):not([tabindex]):focus {
      outline: 0;
    }
    
    pre,
    code,
    kbd,
    samp {
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 1em;
    }
    
    pre {
      margin-top: 0;
      margin-bottom: ${props.spacing.space1};
      overflow: auto;
      -ms-overflow-style: scrollbar;
    }
    
    figure {
      margin: 0 0 ${props.spacing.space2};
    }
    
    img {
      vertical-align: middle;
      border-style: none;
    }
    
    svg {
      overflow: hidden;
      vertical-align: middle;
    }
    
    table {
      border-collapse: collapse;
    }
    
    caption {
      padding-top: ${props.spacing.space1};
      padding-bottom: ${props.spacing.space1};
      color: #6c757d;
      text-align: left;
      caption-side: bottom;
    }
    
    th {
      text-align: inherit;
    }
    
    label {
      display: inline-block;
      margin-bottom: ${props.spacing.space1};
    }
    
    button {
      border-radius: 0;
    }
    
    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    
    input,
    button,
    select,
    optgroup,
    textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    
    button,
    input {
      overflow: visible;
    }
    
    button,
    select {
      text-transform: none;
    }
    
    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
    
    input[type="radio"],
    input[type="checkbox"] {
      box-sizing: border-box;
      padding: 0;
    }
    
    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
      -webkit-appearance: listbox;
    }
    
    textarea {
      overflow: auto;
      resize: vertical;
    }
    
    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }
    
    legend {
      display: block;
      width: 100%;
      max-width: 100%;
      padding: 0;
      margin-bottom: ${props.spacing.space1};
      font-size: ${props.fontSizes.text};
      line-height: inherit;
      color: inherit;
      white-space: normal;
    }
    
    progress {
      vertical-align: baseline;
    }
    
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    
    [type="search"] {
      outline-offset: -2px;
      -webkit-appearance: none;
    }
    
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    
    ::-webkit-file-upload-button {
      font: inherit;
      -webkit-appearance: button;
    }
    
    output {
      display: inline-block;
    }
    
    summary {
      display: list-item;
      cursor: pointer;
    }
    
    template {
      display: none;
    }
    
    [hidden] {
      display: none !important;
    }
  `
  renderer.renderStatic(rebootCss)

  // set the base fonts for body and headlines
  renderer.renderStatic({
    ...props.fontStyles.text,
  }, 'body')
  renderer.renderStatic({
    ...props.fontStyles.headline,
  }, 'h1, h2, h3, h4, h5, h6')
  renderer.renderStatic({
    marginTop: props.spacing.space2,
  }, '* + h1, * + h2, * + h3, * + h4, * + h5, * + h6')
  renderer.renderStatic({
    fontSize: props.fontSizes.h1,
  }, 'h1')
  renderer.renderStatic({
    fontSize: props.fontSizes.h2,
  }, 'h2')
  renderer.renderStatic({
    fontSize: props.fontSizes.h3,
  }, 'h3')

  // render lists
  renderer.renderStatic({
    listStylePosition: 'outside',
  }, 'ul, ol')
  renderer.renderStatic({
    listStyleType: 'circle',
  }, 'ul ul, ol ul')
}
