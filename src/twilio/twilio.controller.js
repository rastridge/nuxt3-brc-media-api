const express = require('express')
const router = express.Router()

////////////// ROUTES //////////////////////

router.get('/voice', Answer)
router.get('/sms', Reply)

module.exports = router

const VoiceResponse = require('twilio').twiml.VoiceResponse

function Answer(request, response) {
	const twiml = new VoiceResponse()
	twiml.play(
		{
			loop: 1,
		},
		'https://media.buffalorugby.org/recordings/TheIrishMentalHealthHotline.mp3'
	)

	response.type('text/xml')
	response.send(twiml.toString())
}

const MessagingResponse = require('twilio').twiml.MessagingResponse

function Reply(req, res, next) {
	const response = new MessagingResponse()
	const message = response.message()
	message.body('This is a broadcast only text # - Replying is futile!')
	res.type('text/xml')
	res.send(response.toString())
}
