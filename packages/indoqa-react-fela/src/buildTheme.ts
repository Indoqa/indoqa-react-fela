import merge from 'deepmerge'
import {baseTheme, BaseTheme} from './baseTheme'

export function buildTheme<T extends BaseTheme>(customTheme: T): T {
  return (merge(baseTheme, customTheme) as T)
}
