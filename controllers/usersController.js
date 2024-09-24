// controllers/usersController.js

const db = require('../db/queries');

async function getBooks(req, res) {
    books = await db.getAllBooks();
    // extracts book property from each book object
	res.send('Books: ' + books.map((title) => title.book).join(', '));
}

async function createBookGet(req, res) {
	res.render('index', {
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
