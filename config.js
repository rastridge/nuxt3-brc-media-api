// config.js
const dotenv = require('dotenv').config()

module.exports = {
	// website
	SITE_URL: process.env.SITE_URL,
	SITE_DIR: process.env.SITE_DIR,

	// mysql DB
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DATABASE: process.env.DB_DATABASE,
	// images
	MEDIA_SITE_URL: process.env.MEDIA_SITE_URL,
	IMAGE_PATH: process.env.IMAGE_PATH,
	// specific
	NEWS_PATH: process.env.MEDIA_SITE_URL,
	SPONSORS_PATH: process.env.SPONSORS_PATH,
	CONTENT_PATH: process.env.CONTENT_PATH,
	NEWS_PATH: process.env.NEWS_PATH,
	WOF_PATH: process.env.WOF_PATH,
	CLUBHOUSE_PATH: process.env.CLUBHOUSE_PATH,
	ARCHIVES_PATH: process.env.ARCHIVES_PATH,
}
