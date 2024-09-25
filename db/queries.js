const pool = require('./pool');

async function getAllBooks() {
	const { rows } = await pool.query('SELECT * FROM books');
	return rows;
}

async function getAllGenres() {
	const { rows } = await pool.query('SELECT * FROM genres');
	return rows;
}

// async function insertUsername(username) {
// 	await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
// }

// async function searchAllUsernames(search) {
//     const { rows } = await pool.query('SELECT * FROM usernames WHERE username LIKE $1', [`%${search}%`]);
// 	return rows;
// }

// async function deleteAllUsernames() {
// 	const { rows } = await pool.query('DELETE FROM usernames');
// 	return rows;
// }

module.exports = {
	getAllBooks,
	getAllGenres,
};
