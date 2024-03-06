const multer = require('multer')
const SharpMulter = require('sharp-multer')
const { CONTENT_PATH, IMAGE_PATH } = require('../../config.js')
// const activityLog = require('../helpers/activity-log')

/* const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${IMAGE_PATH}${CONTENT_PATH}`)
	},
	filename: function (req, file, cb) {
		let timestamp = Date.now()
		cb(null, timestamp + '-content-' + file.originalname)
	},
}) */

const storage = SharpMulter({
	destination: (req, file, callback) =>
		callback(null, `${IMAGE_PATH}${CONTENT_PATH}`),
	imageOptions: {
		fileFormat: 'png',
		quality: 80,
		resize: { width: 640, resizeMode: 'outside' },
	},
	filename: function (og_filename, options) {
		let timestamp = Date.now()
		const newname =
			timestamp +
			'-content640-' +
			og_filename.split('.').slice(0, -1).join('.') +
			'.' +
			options.fileFormat
		return newname
	},
})

let uploadContentImage = multer({ storage: storage })

module.exports = uploadContentImage.single('file')
