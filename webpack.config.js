module.exports = {
  entry: "./demo/index.jsx",
  output: {
    path: 'build',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
