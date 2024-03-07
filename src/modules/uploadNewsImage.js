const multer = require('multer')
const SharpMulter = require('sharp-multer')
const { NEWS_PATH, IMAGE_PATH } = require('../../config.js')
const PATH = `${IMAGE_PATH}${NEWS_PATH}`
const storage = SharpMulter({
	destination: (req, file, callback) =>
		// callback(null, `${IMAGE_PATH}${NEWS_PATH}`),
		callback(null, `${PATH}`),
	imageOptions: {
		fileFormat: 'png',
		quality: 80,
		resize: { width: 640, resizeMode: 'outside' },
	},
	filename: function (og_filename, options) {
		let timestamp = Date.now()
		const newname =
			timestamp +
			'-news640x-' +
			og_filename.split('.').slice(0, -1).join('.') +
			'.' +
			options.fileFormat
		return newname
	},
})

const uploadNewsImage = multer({ storage: storage })

module.exports = uploadNewsImage.single('file')
