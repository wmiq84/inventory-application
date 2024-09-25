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
	res.render('create', {
		title: 'Form', 
		action: "/edit",
	});
};

async function editABook(req, res) {
	const { book, genre } = req.body;
	await db.editBook(book, genre, "ASD", "DSA");
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
