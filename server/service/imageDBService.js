const Query = require('../models/Query')

const imageDBService = {}

imageDBService.newQuery = (term,when) => {
	return new Promise((resolve,reject) => {
		const query = new Query({term,when})
		query.save()
			.then(query => {
				resolve(query)
			})
			.catch(console.error)		
	})
}

imageDBService.findQueryByTerm = (term) => {
	return new Promise((resolve,reject) => {
		Query.findOne({"term":term}, (err, query) => {
			resolve(query)
		})
	})
} 

imageDBService.listQuerys = () => {
	return new Promise((resolve,reject) => {
		Query.find()
			.then(querys => {
				resolve(querys)
			})
			.catch(console.error)
	})
}

module.exports = imageDBService