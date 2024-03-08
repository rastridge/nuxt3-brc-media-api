const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors()) // any source
app.use(express.urlencoded({ extended: true }))

// Dreamhost Proxy server process inserts extra '/' for reason I don't understand
//   this eliminates 'extra' '/'
//

const { DB_HOST, DB_DATABASE } = require('./config')

/* const activityLog = require('./src/helpers/activity-log')
activityLog(
	'Testing',
	'IN app.js DB_HOST, DB_DATABASE = ',
	DB_HOST + ' ' + DB_DATABASE
) */

// Middleware to normalise the request URL
app.use((req, res, next) => {
	// Replace multiple leading slashes with a single slash
	req.url = req.url.replace(/^\/+/, '/')
	next()
})

// for testing purposes
//
app.get('/', function (request, response) {
	// activityLog('Labels', 'IN app.get / DB_HOST= ', DB_HOST)

	response.writeHead(200, { 'Content-Type': 'text/plain' })
	response.end('/ is working yahoooooooo')
})

app.get('/test', function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' })
	response.end('/test is working')
})

app.get('/api/test', (req, res) => {
	response.writeHead(200, { 'Content-Type': 'text/plain' })
	res.send('/api/test is working')
})

app.use('/images', require('./src/images/image.controller'))
// app.use('/memberinfo', require('./src/memberinfo/memberinfo.controller'))

// app.use(errorHandler) // next()

// start server
const port = 9002
const server = app.listen(port, function () {
	console.log('BRC Server listening on port ' + port)
})
