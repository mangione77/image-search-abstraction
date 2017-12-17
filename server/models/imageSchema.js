const mongoose = require('mongoose')
const Schema = const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageDBService = new Schema({
	url:String,
	type:String,
	width/height:String,
	description:String,
	from:String,
	thumbnail:String
})

module.exports = mongoose.model('Image', imageDBService)