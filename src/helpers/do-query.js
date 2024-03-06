const mysql = require('mysql2/promise')
const {
	DB_HOST,
	DB_USER,
	DB_PASSWORD,
	DB_DATABASE,
} = require('../../config.js')

const activityLog = require('./activity-log')

module.exports = doDBQuery

async function doDBQuery(sql, inserts) {
	activityLog('Labels', 'IN doDBQuery DB_HOST= ', DB_HOST)

	const conn1 = await mysql.createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_DATABASE,
	})

	if (inserts) {
		sql = mysql.format(sql, inserts)
	}
	activityLog(
		'Labels',
		'IN doDBQuery DB= ',
		DB_HOST,
		DB_USER,
		DB_PASSWORD,
		DB_DATABASE
	)

	const [rows, fields] = await conn1.execute(sql)
	await conn1.end() // not necessary if pooled?
	return rows
}
