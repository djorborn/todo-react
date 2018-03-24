const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  lists: [{type: Schema.Types.ObjectId, ref: 'List'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User
