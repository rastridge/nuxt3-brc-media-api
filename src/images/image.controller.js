const express = require('express')
const router = express.Router()
const uploadNewsletterImage = require('../modules/uploadNewsletterImage')
const uploadArchiveDoc = require('../modules/uploadArchiveDoc')
const uploadNewsImage = require('../modules/uploadNewsImage')
const uploadContentImage = require('../modules/uploadContentImage')
const uploadSponsorImage = require('../modules/uploadSponsorImage')
const uploadWOFImage = require('../modules/uploadWOFImage')
const uploadClubhouseImage = require('../modules/uploadClubhouseImage')
const imageService = require('./image.service')
const activityLog = require('../helpers/activity-log')

// router.post('/upload', upload, addImage)
router.post('/newsletter', uploadNewsletterImage, addNewsletterImage)
router.post('/news', uploadNewsImage, addNewsImage)
router.post('/archives', uploadArchiveDoc, addArchiveDoc)
router.post('/content', uploadContentImage, addContentImage)
router.post('/sponsors', uploadSponsorImage, addSponsorImage)
router.post('/wof', uploadWOFImage, addWOFImage)
router.post('/clubhouse', uploadClubhouseImage, addClubhouseImage)
// router.get('/files', getListFiles)

module.exports = router

/* function addImage(req, res, next) {

	imageService
		.addImage(req.file)
		.then((result) => {
			return res.json(result)
		})
		.catch((err) => next(err))
} */

function addNewsImage(req, res, next) {
	const { DB_HOST } = require('../../config')
	const activityLog = require('../../src/helpers/activity-log.js')
	activityLog('Testing', 'IN addNewsImage DB_HOST= ', DB_HOST)
	imageService
		.addNewsImage(req.file)
		.then((result) => {
			return res.json(result)
		})
		.catch((err) => next(err))
}

function addNewsletterImage(req, res, next) {
	/* 	activityLog(
		'uploads',
		'IN imageService.addNewsletterImage controller result.imageUrl = ',
		'got here'
	) */

	imageService
		.addNewsletterImage(req.file)
		.then((result) => {
			/* 			activityLog(
				'uploads',
				'IN imageService.addNewsletterImage controller result.imageUrl = ',
				res.json(result)
			) */
			return res.json(result)
		})
		.catch((err) => next(err))
}

function addClubhouseImage(req, res, next) {
	/* 	activityLog(
		'uploads',
		'IN imageService.addClubhouseImage controller result.imageUrl = ',
		'got here'
	) */

	imageService
		.addClubhouseImage(req.file)
		.then((result) => {
			/* 			activityLog(
				'uploads',
				'IN imageService.addClubhouseImage controller result.imageUrl = ',
				res.json(result)
			) */
			return res.json(result)
		})
		.catch((err) => next(err))
}

function addWOFImage(req, res, next) {
	/* 	activityLog(
		'uploads',
		'IN imageService.addWOFImage controller result.imageUrl = ',
		'got here'
	) */

	imageService
		.addWOFImage(req.file)
		.then((result) => {
			/* 			activityLog(
				'uploads',
				'IN imageService.addWOFImage controller result.imageUrl = ',
				res.json(result)
			) */
			return res.json(result)
		})
		.catch((err) => next(err))
}

function addSponsorImage(req, res, next) {
	/* 	activityLog(
		'uploads',
		'IN imageService.addSponsorImage controller result.imageUrl = ',
		'got here'
	) */

	imageService
		.addSponsorImage(req.file)
		.then((result) => {
			/* 			activityLog(
				'uploads',
				'IN imageService.addSponsorImage controller result.imageUrl = ',
				res.json(result)
			) */
			return res.json(result)
		})
		.catch((err) => next(err))
}

function addContentImage(req, res, next) {
	/* 	activityLog(
		'uploads',
		'IN imageService.addContentImage controller result.imageUrl = ',
		'got here ok'
	) */
	imageService
		.addContentImage(req.file)
		.then((result) => res.json(result))
		.catch((err) => next(err))
}

function addArchiveDoc(req, res, next) {
	/* 	activityLog(
		'uploads',
		'IN imageService.addArchiveDoc controller result.imageUrl = ',
		'got here'
	) */

	imageService
		.addArchiveDoc(req.file)
		.then((result) => {
			/* 			activityLog(
				'uploads',
				'IN imageService.addArchiveDoc controller result.imageUrl = ',
				res.json(result)
			) */
			return res.json(result)
		})
		.catch((err) => next(err))
}
