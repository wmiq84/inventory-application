// controllers/usersController.js

const db = require('../db/queries');

async function getBooks(req, res) {
	books = await db.getAllBooks();
	genres = await db.getAllGenres();

	res.render('index', { book: books, genre: genres });
	console.log(genres)
}

async function createBookGet(req, res) {
	const { book } = req.query;
	const { genre } = req.query;

	res.render('create', {
		title: 'Form',
		action: "/new",
		book: book || "",
        genre: genre || "",
	});
}

async function addABook(req, res) {
	const { book, genre } = req.body;
	await db.addBook(book, genre);
	res.redirect('/');
}

async function createBookDelete(req, res) {
	const { book } = req.query;
	const { genre } = req.query;

	res.render('create', {
		title: 'Form', 
		action: "/delete",
		book: book,
        genre: genre,
	});
}

async function deleteABook(req, res) {
	const { book, genre } = req.body;
	await db.deleteBook(book, genre);
	res.redirect('/');
}

async function createBookEdit(req, res) {
	const { book, genre } = req.query;

	res.render('create', {
		title: 'Form', 
		action: "/edit",
		book: book,
        genre: genre,
	});
}

async function editABook(req, res) {
	const { bookId, genreId } = req.query;
	const { book, genre } = req.body;
	console.log(bookId, genreId)
	await db.deleteBook(book, genre)
	await db.addBook(book, genre);
	res.redirect('/');
};

module.exports = {
	getBooks,
	createBookGet,
	addABook,
	createBookDelete,
	deleteABook,
	createBookEdit,
	editABook,
	// createUsernameGet,
	// createUsernamePost,
	// deleteUsernames,
};
