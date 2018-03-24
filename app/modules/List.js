const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
  text: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
})

const List = mongoose.model('List', listSchema)

module.exports = List
