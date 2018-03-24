const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    bundle: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader', options: {
            includePaths: [
              path.resolve(__dirname, 'node_modules')
            ]
          }}
        ]
      }
    ]
  }
}
