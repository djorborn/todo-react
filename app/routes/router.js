const router = require('express').Router()
const List = require('../modules/List')

router.get('/', (req, res) => {
  res.render('layout')
})

router.get('/form', (req, res) => {
  res.render('form')
})

router.get('/list', (req, res) => {
  List.find({}, (err, lists) => {
    if (err) throw err
    res.json(lists)
  })
})

router.post('/form', (req, res) => {
  const text = req.body.json.text
  const list = new List({
    text: text
  })
  list.save(()=> {
    res.send('List Saved')
  })
})

module.exports = router
