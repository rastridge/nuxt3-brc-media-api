const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')
const memberinfoService = require('./memberinfo.service')

const activityLog = require('../helpers/activity-log')
activityLog('controller', 'IN memberinfo controller  = ', ' ')
////////////// ROUTES //////////////////////
router.get('/', getAll)
router.post('/makelabels', bodyparser.json(), makeLabels)
router.post('/makereturnlabels', makeReturnLabels)

module.exports = router

function getAll(req, res, next) {
	memberinfoService
		.getAll()
		.then((memberinfo) => res.json(memberinfo))
		.catch((err) => next(err))
}

function makeLabels(req, res, next) {
	memberinfoService
		.makeLabels(req.body)
		.then((labels) => res.json(labels))
		.catch((err) => next(err))
}

function makeReturnLabels(req, res, next) {
	memberinfoService
		.makeReturnLabels()
		.then((labels) => res.json(labels))
		.catch((err) => next(err))
}
