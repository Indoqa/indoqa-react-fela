import resolve from 'rollup-plugin-node-resolve'
import sourceMaps from 'rollup-plugin-sourcemaps'
import cleanup from 'rollup-plugin-cleanup'

import pkg from './package.json'

const input = 'compiled/index.js'
const external = ['react', 'react-dom', 'fela', 'react-fela', 'fela-preset-web', 'deepmerge']

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
  ]
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
  ]
})

export default [
  buildCjs(),
  buildEs(),
]
