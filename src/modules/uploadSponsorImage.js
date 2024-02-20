const multer = require('multer')
const SharpMulter = require('sharp-multer')
const { SPONSORS_PATH, IMAGE_PATH } = require('../../config')

// const activityLog = require('../helpers/activity-log')
// activityLog('uploads', 'IN uploadsponsorimage = ', 'got here ok2')

/* const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${IMAGE_PATH}${SPONSORS_PATH}`)
	},
	filename: function (req, file, cb) {
		let timestamp = Date.now()
		cb(null, timestamp + '-sponsor-' + file.originalname)
	},
}) */
const storage = SharpMulter({
	destination: (req, file, callback) =>
		callback(null, `${IMAGE_PATH}${SPONSORS_PATH}`),
	imageOptions: {
		fileFormat: 'png',
		quality: 80,
		resize: { width: 750, height: 125, resizeMode: 'cover' },
	},
	filename: function (og_filename, options) {
		let timestamp = Date.now()
		const newname =
			timestamp +
			'-content750-125-' +
			og_filename.split('.').slice(0, -1).join('.') +
			'.' +
			options.fileFormat
		return newname
	},
})

let uploadContentImage = multer({ storage: storage })

module.exports = uploadContentImage.single('file')
