module.exports = {
	apps: [
		{
			name: 'brc_server',
			script: './app.js',
			cron_restart: '20 19 * * *',
		},
	],
}
