const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const compiler = webpack(config)
const path = require('path')
const express = require('express')
const app = express()
const router = require('./app/routes/router')

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'app/views'))
app.use(
  [
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  ],
  [
    webpackHotMiddleware(compiler)
  ],
  [
    router
  ]
).listen(3000, () => {
  console.log('Server running @ http://localhost:3000');
})
