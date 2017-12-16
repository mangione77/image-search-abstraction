const express = require('express')
const routes = express()

const helloWorld = require('./controllers/helloWorld')

routes.get("/", helloWorld.get)

module.exports = routes