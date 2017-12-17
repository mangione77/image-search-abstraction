const express = require('express')
const routes = express()

const helloWorld = require('./controllers/helloWorld')
const googleSearchController = require('./controllers/googleSearchController')
const latestQuerysController = require('./controllers/latestQueryController')

routes.get("/", helloWorld.get)
// Image search route
routes.get("/search/:query/:numberOfResults?/:size?", googleSearchController.searchImages)
// Latest searches route
routes.get("/search/latest", latestQuerysController.getQuerys)

module.exports = routes