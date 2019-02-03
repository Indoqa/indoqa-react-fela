declare module 'Types'

declare module 'fela-plugin-named-media-query' {
  import {TPlugin} from 'fela'

  interface MediaQueryMap {
    [key: string]: string
  }

  export default function(namedMediaQueries: MediaQueryMap): TPlugin
}
