const pool = require('./pool');

async function getAllBooks() {
	const { rows } = await pool.query('SELECT * FROM books');
	return rows;
}

async function getAllGenres() {
	const { rows } = await pool.query('SELECT * FROM genres');
	return rows;
}

async function addBook(book, genre) {
	await pool.query('INSERT INTO books (book) VALUES ($1)', [book]);
	await pool.query('INSERT INTO genres (genre) VALUES ($1)', [genre]);
}

module.exports = {
	getAllBooks,
	getAllGenres,
	addBook,
};
