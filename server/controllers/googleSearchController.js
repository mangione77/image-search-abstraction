const GoogleImages = require('google-images')
const client = new GoogleImages(process.env.CSE_ID,process.env.GOOGLE_KEY)

const SearchClient = {}

SearchClient.searchImages = (req,res) => {
	let { query } = req.params

	client.search(query)
		.then(images => {
			images.map(image => {
				res.json({
					"url":image.url,
					"type":image.type,
					"width/height":image.width+"x"+image.height,
					"thumbnail":image.thumbnail.url
				})
			})
		})
}

module.exports = SearchClient