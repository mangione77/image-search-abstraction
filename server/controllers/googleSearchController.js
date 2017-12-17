const GoogleImages = require('google-images')
const imageDBService = require('../service/imageDBService')
const client = new GoogleImages(process.env.CSE_ID,process.env.GOOGLE_KEY)

const SearchClient = {}

SearchClient.searchImages = (req,res) => {
	let query = req.params.query
	let numberOfResults = req.params.numberOfResults || 1
	let picSize = req.params.size || 'large'

	// Search the query. If it doesn't exist in DB (i.e it wasn't searched yet), save it
	imageDBService.findQueryByTerm(query)
		.then(resultQuery => {
			if (resultQuery == null) {
				imageDBService.newQuery(query,new Date())
					.then(newCreatedQuery => {
						console.log('New query created: ' + query + ' At: ' + new Date())
					})
					.catch(console.error)
			}
		})
		.catch(console.error)
	
	// Search images and return them as json
	client.search(query, {page:numberOfResults, size:picSize})
		.then(images => {
			let results = []
			images.map(image => {
				results.push({
					"url":image.url,
					"type":image.type,
					"width/height":image.width+"x"+image.height,
					"description":image.description,
					"from":image.parentPage,
					"thumbnail":image.thumbnail.url
				})
			})
			res.json({
				"results":results
			})
		})
		.catch(console.error)
}

module.exports = SearchClient