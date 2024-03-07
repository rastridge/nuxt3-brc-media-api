module.exports = {
	apps: [
		{
			name: 'brc_server',
			script: './app.js',
			env: {
				IMAGE_PATH: '/home/rastridge/media.buffalorugby.org/public/',
				NEWS_PATH: '_img/_news_newsletters/',
				MEDIA_SITE_URL: 'https://media.buffalorugby.org/',
				SPONSORS_PATH: '_img/_banners/',
				CONTENT_PATH: '_img/_content/',
				WOF_PATH: '_img/_mugs/',
				CLUBHOUSE_PATH: '_all_imgs/clubhouse/',
				ARCHIVES_PATH: 'xoda/files/archives/',
			},
			cron_restart: '0 */12 * * *',
		},
	],
}
