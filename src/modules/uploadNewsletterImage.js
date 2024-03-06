const multer = require('multer')
// const SharpMulter = require('sharp-multer')
const { NEWS_PATH, IMAGE_PATH } = require('../../config.js')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${IMAGE_PATH}${NEWS_PATH}`)
	},
	filename: function (req, file, cb) {
		let timestamp = Date.now()
		cb(null, timestamp + '-content-' + file.originalname)
	},
})

/* const newFilename = (og_filename, options) => {
	const newname =
		og_filename.split('.').slice(0, -1).join('.') +
		`${options.useTimestamp ? '-' + Date.now() : ''}` +
		'.' +
		options.fileFormat
	return newname
} */

/* const storage = SharpMulter({
	destination: (req, file, callback) =>
		callback(null, `${IMAGE_PATH}${NEWS_PATH}`),
	imageOptions: {
		fileFormat: 'png',
		quality: 80,
		resize: { width: 640, height: 640, resizeMode: 'cover' },
	},
	filename: function (og_filename, options) {
		let timestamp = Date.now()
		const newname =
			timestamp +
			'-newsletter640-' +
			og_filename.split('.').slice(0, -1).join('.') +
			'.' +
			options.fileFormat
		return newname
	},
}) */

let uploadNewsletterImage = multer({ storage: storage })

module.exports = uploadNewsletterImage.single('file')
