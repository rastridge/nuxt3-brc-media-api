const multer = require('multer')

const { ARCHIVES_PATH, IMAGE_PATH } = require('../../config')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${IMAGE_PATH}${ARCHIVES_PATH}`)
	},
	filename: function (req, file, cb) {
		let timestamp = Date.now()
		cb(null, timestamp + '-document-' + file.originalname)
	},
})

let uploadArchiveDoc = multer({ storage: storage })

module.exports = uploadArchiveDoc.single('file')
