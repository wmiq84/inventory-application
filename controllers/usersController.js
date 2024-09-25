// controllers/usersController.js

const db = require('../db/queries');

async function getBooks(req, res) {
	books = await db.getAllBooks();
	genres = await db.getAllGenres();

	res.render('index', { book: books, genre: genres });
	console.log(genres)
}

async function createBookGet(req, res) {
	res.render('create', {
		title: 'Form',
		action: "/new",
	});
}

async function addABook(req, res) {
	const { book, genre } = req.body;
	await db.addBook(book, genre);
	res.redirect('/');
}


async function createBookDelete(req, res) {
	res.render('create', {
		title: 'Form', 
		action: "/delete",
	});
}

async function deleteABook(req, res) {
	const { book, genre } = req.body;
	await db.deleteBook(book, genre);
	res.redirect('/');
}

module.exports = {
	getBooks,
	createBookGet,
	addABook,
	createBookDelete,
	deleteABook,
	// createUsernameGet,
	// createUsernamePost,
	// deleteUsernames,
};
