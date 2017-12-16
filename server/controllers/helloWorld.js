const helloWorld = {}

helloWorld.get = (req,res) => {
	res.status(200).json({
		"status":200,
		"message":'Welcome'
	})

	res.status(500).json({
		"status":500,
		"message":'Something happened...'
	})
}

module.exports = helloWorld