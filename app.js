const cors = require('cors')
const express = require('express')
const app = express()
// const activityLog = require('./src/helpers/activity-log')

app.use(cors()) // any source

app.use(express.urlencoded({ extended: true }))

app.use('/images', require('./src/images/image.controller'))
app.use('/memberinfo', require('./src/memberinfo/memberinfo.controller'))

// app.use(errorHandler) // next()

let port = 443
app.listen(port, () => {})
