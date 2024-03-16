const fs = require('fs')
// const path = require('path')
const { MEDIA_SITE_URL } = require('../../config')
console.log(MEDIA_SITE_URL)

module.exports = {
	addNewsletterImage,
	addNewsImage,
	addArchiveDoc,
	addContentImage,
	addSponsorImage,
	addWOFImage,
	addClubhouseImage,
}

async function addNewsImage(file) {
	// const activityLog = require('../../src/helpers/activity-log')
	// activityLog('Testing', 'IN addNewsImage MEDIA_SITE_URL= ', MEDIA_SITE_URL)
	return {
		imageUrl: `${MEDIA_SITE_URL}_img/_news_newsletters/${file.filename}`,
	}
}

async function addClubhouseImage(file) {
	return {
		imageUrl: MEDIA_SITE_URL + '_all_imgs/clubhouse/' + file.filename,
	}
}
async function addWOFImage(file) {
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_mugs/' + file.filename,
	}
}

async function addNewsletterImage(file) {
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
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_content/' + file.filename,
	}
}

async function addSponsorImage(file) {
	return {
		imageUrl: MEDIA_SITE_URL + '_img/_banners/' + file.filename,
	}
}
