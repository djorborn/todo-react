const webpack = require('webpack')
const path = require('path')
const HotModuleScript = 'webpack-hot-middleware/client'

module.exports = {
  mode: 'development',
  entry: {
    bundle: [HotModuleScript, './src/index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
