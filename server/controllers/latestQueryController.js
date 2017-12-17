const imageDBService = require('../service/imageDBService')

const latestQueryController = {}

latestQueryController.getQuerys = (req,res) => {
	imageDBService.listQuerys()
		.then(querys => {
			let results = []
			querys.map(query => {
				results.push({
					"term":query.term,
					"when":query.when
				})
			})
			res.json({
				results
			})
		})
		.catch(console.error)
}

module.exports = latestQueryController

