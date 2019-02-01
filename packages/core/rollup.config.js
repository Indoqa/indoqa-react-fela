import cleanup from 'rollup-plugin-cleanup'
import resolve from 'rollup-plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'

import pkg from './package.json'

const input = 'compiled/index.js'
const external = Object.keys(pkg.peerDependencies)

const noThisIsUndefinedWarning = {
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }
    console.warn(warning.message)
  }
}

const buildCjs = () => ({
  input,
  external,
  output: {
    file: pkg.main,
    format: 'cjs',
    sourceMap: true,
  },
  plugins: [
    resolve(),
    sourceMaps(),
    cleanup({}),
  ],
  ...noThisIsUndefinedWarning,
})

const buildEs = () => ({
  input,
  external,
  output: {
    file: pkg.module,
    format: 'es',
    sourceMap: true,
  },
  plugins: [
    resolve(),
    sourceMaps(),
    cleanup({}),
  ],
  ...noThisIsUndefinedWarning,
})

export default [
  buildCjs(),
  buildEs(),
]
