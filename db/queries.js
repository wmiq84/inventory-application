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

async function deleteBook(book, genre) {
	const genreCount = await pool.query('SELECT COUNT(*) FROM genres WHERE genre = $1', [genre]);
	const genreCountInt = parseInt(genreCount.rows[0].count, 10);

	await pool.query('DELETE FROM books WHERE BOOK = $1', [book]);
	if (genreCountInt === 1) {
		await pool.query('DELETE FROM genres WHERE GENRE = $1', [genre]);
		console.log("AD")
	}
	else{
		console.log("ADS")
	}
}

module.exports = {
	getAllBooks,
	getAllGenres,
	addBook,
	deleteBook
};
