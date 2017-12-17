const GoogleImages = require('google-images')
const client = new GoogleImages(process.env.CSE_ID,process.env.GOOGLE_KEY)

const SearchClient = {}

SearchClient.searchImages = (req,res) => {
	let query = req.params.query
	let numberOfResults = req.params.numberOfResults || 1
	client.search(query, {page:numberOfResults})
		.then(images => {
			let results = []
			images.map(image => {
				results.push({
					"url":image.url,
					"type":image.type,
					"width/height":image.width+"x"+image.height,
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