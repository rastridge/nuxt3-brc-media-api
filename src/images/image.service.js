const fs = require('fs')
const MEDIA_SITE_URL = 'https://media.buffalorugby.org/'
const path = require('path')
// const request = require('request')

const activityLog = require('../helpers/activity-log')

module.exports = {
	// addImage,
	addNewsletterImage,
	addNewsImage,
	addArchiveDoc,
	addContentImage,
	addSponsorImage,
	addWOFImage,
	addClubhouseImage,
	// getListFiles,
}

/* async function addImage(file) {
	activityLog('uploads', 'IN addImage file.filename = ', file.filename)
	return {
		imageUrl: MEDIA_SITE_URL + BASE_DIR + file.filename,
	}
	if (file) {
		await sharp(file.path)
			.resize(640)
			.jpeg({ quality: 90 })
			.toFile(IMAGE_PATH + 'resized' + file.filename)
		fs.unlinkSync(file.path)
		// must be full MEDIA_SITE_URL when embedded in email
		return {
			imageUrl: MEDIA_SITE_URL + 'resized' + file.filename,
		}
	} else {
		const error = new Error('Please upload a file')
		error.httpStatusCode = 400
		return next(error)
	} */

async function addClubhouseImage(file) {
	/* 	activityLog(
		'uploads',
		'IN addClubhouseImage file.filename = ',
		path.join(MEDIA_SITE_URL, '_all_imgs/clubhouse/', file.filename)
	) */
	return {
		imageUrl: MEDIA_SITE_URL + '_all_imgs/clubhouse/' + file.filename,
	}
}
async function addWOFImage(file) {
	/* 	activityLog(
		'uploads',
		'IN addWOFImage file.filename = ',
		path.join(MEDIA_SITE_URL, '_img/_mugs/', file.filename)
	) */
	return {
		// imageUrl: path.join(MEDIA_SITE_URL, '_img/_mugs/', file.filename),
		imageUrl: MEDIA_SITE_URL + '_img/_mugs/' + file.filename,
	}
}

async function addNewsletterImage(file) {
	// activityLog(
	// 	'uploads',
	// 	'IN addNewsletterImage file.filename = ',
	// 	path.join(MEDIA_SITE_URL, '_img/_news_newsletters/', file.filename)
	// )
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_news_newsletters/' + file.filename,
	}
}

async function addNewsImage(file) {
	/* 	activityLog(
		'uploads',
		'IN addNewsImage file.filename = ',
		MEDIA_SITE_URL + '_img/_news_newsletters/' + file.filename
	) */
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_news_newsletters/' + file.filename,
	}
}
async function addArchiveDoc(file) {
	return {
		imageUrl: MEDIA_SITE_URL + 'xoda/files/archives/' + file.filename,
	}
}

async function addContentImage(file) {
	/* 	activityLog(
		'uploads',
		'IN addContentImage file.filename = ',
		'https://media.buffalorugby.org/' + '_img/_content/' + file.filename
	) */
	// ///////////////////////  tis breaks it
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_content/' + file.filename,
	}
}

async function addSponsorImage(file) {
	/* 	activityLog(
		'uploads',
		'IN addSponsorImage file.filename = ',
		path.join(MEDIA_SITE_URL, '_img/_banners/', file.filename)
	) */
	// ///////////////////////  tis breaks it
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_banners/' + file.filename,
	}
}

/* 	if (file) {
		await sharp(file.path)
			.resize(640)
			.jpeg({ quality: 90 })
			.toFile(IMAGE_PATH + 'resized' + file.filename)
		fs.unlinkSync(file.path)
		// must be full MEDIA_SITE_URL when embedded in email
		return {
			imageUrl: MEDIA_SITE_URL + 'resized' + file.filename,
		}
	} else {
		const error = new Error('Please upload a file')
		error.httpStatusCode = 400
		return next(error)
	} */

/* async function getListFiles() {
	const directoryPath = IMAGE_PATH

	fs.readdir(directoryPath, function (err, files) {
		let fileInfos = []
		files.forEach((file) => {
			fileInfos.push({
				name: file,
				url: MEDIA_SITE_URL + file,
			})
		})
		activityLog(
			'uploads',
			' IN imageService.getListFiles fileInfos[0].name = ',
			fileInfos[0].name
		)

		return fileInfos[0].name
	})
} */
