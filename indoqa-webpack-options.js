module.exports = {
  appName: 'IndoqaReactFela',
  isReactLibrary: true,
  uglify: false, // no uglify to keep the component name
  externals: {
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
    'fela-preset-web': 'fela-preset-web',
    fela: 'fela',
    'react-fela': 'react-fela',
    'react-router': 'react-router',
  },
}
