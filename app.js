const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors()) // any source
app.use(express.urlencoded({ extended: true }))

// Dreamhost Proxy server process inserts extra '/' for reason I don't understand
//   this eliminates 'extra' '/'
//

const { MEDIA_PORT } = require('./config')

// Middleware to normalise the request URL
app.use((req, res, next) => {
	// Replace multiple leading slashes with a single slash
	req.url = req.url.replace(/^\/+/, '/')
	next()
})

// for testing purposes
//
app.get('/', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' })
	response.end('/ is working yahoo')
})

app.get('/test', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' })
	response.end('/test is working')
})

/* app.get('/twilio', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' })
	response.end('/twilio is working')
}) */

app.use('/images', require('./src/images/image.controller'))
app.use('/twilio', require('./src/twilio/twilio.controller'))

// app.use(errorHandler) // next()

// start server
const server = app.listen(MEDIA_PORT, function () {
	console.log('BRC Server listening on port ' + MEDIA_PORT)
})
