const path = require('path')
const express = require('express')
const app = express()
const router = require('./app/routes/router')

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'app/views'))
app.use(
  [express.json()],
  [express.urlencoded({extended: true})],
  [express.static(path.resolve(__dirname, 'app/dist'))],
  [
    router
  ]
).listen(3000, () => {
  console.log('Server running @ http://localhost:3000');
})
