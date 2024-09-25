// controllers/usersController.js

const db = require('../db/queries');

async function getBooks(req, res) {
	books = await db.getAllBooks();
	genres = await db.getAllGenres();
	// extracts book property from each book object
	// const booksString = 'Books: ' + books.map((title) => title.book).join(', ');
	// const genresString = 'Genres: ' + genres.map((title) => title.genre).join(', ');
	// res.send(`${booksString}<br>${genresString}`);
	res.render('index', { book: books, genre: genres });
	console.log(genres)
}

async function createBookGet(req, res) {
	res.render('create', {
		title: 'Form',
	});
}

module.exports = {
	getBooks,
	createBookGet,
	// createUsernameGet,
	// createUsernamePost,
	// deleteUsernames,
};
