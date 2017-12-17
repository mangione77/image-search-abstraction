const mongoose = require('mongoose')
const Schema = mongoose.Schema

const querySchema = new Schema({
	term:String,
	when:Date
})

module.exports = mongoose.model('Query', querySchema)