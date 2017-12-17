const express = require('express')
const routes = express()

const helloWorld = require('./controllers/helloWorld')
const googleSearchController = require('./controllers/googleSearchController')

routes.get("/", helloWorld.get)
routes.get("/search/:query/:numberOfResults?", googleSearchController.searchImages)

module.exports = routes