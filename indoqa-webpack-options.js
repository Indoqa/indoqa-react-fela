module.exports = {
  appName: 'IndoqaReactFela',
  isLibrary: true,
  uglify: false, // no uglify to keep the component name
  externals: {
    fela: 'fela',
    'fela-preset-web': 'fela-preset-web',
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
    'react-fela': 'react-fela',
    'react-router': 'react-router',
    'react-router-dom': 'react-router-dom',
  },
}
