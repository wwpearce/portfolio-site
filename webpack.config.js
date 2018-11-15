const path = require('path');
const outputDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(__dirname, 'app/js'),
  mode: 'development',
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'eslint-loader'
      ]
    }]
  }
};
