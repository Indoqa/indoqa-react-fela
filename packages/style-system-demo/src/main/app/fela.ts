import monolithic from 'fela-monolithic'
import extend from 'fela-plugin-extend'
import fallbackValue from 'fela-plugin-fallback-value'
import namedKeys from 'fela-plugin-named-keys'
import prefixer from 'fela-plugin-prefixer'
import unit from 'fela-plugin-unit'

import {BREAKPOINT_DESKTOP, BREAKPOINT_TABLET} from './breakpoints'

const keys = namedKeys({
  desktop: `@media (min-width: ${BREAKPOINT_DESKTOP}px)`,
  tablet: `@media (min-width: ${BREAKPOINT_TABLET}px)`,
})

const config: any = {
  plugins: [
    extend(),
    prefixer(),
    fallbackValue(),
    unit(),
    keys,
  ],
  enhancers: [],
}

if (process.env.NODE_ENV !== 'production') {
  config.enhancers = [monolithic({prettySelectors: true})]
  config.debug = true
}

export default {
  config,
  resetCss: false,
}
