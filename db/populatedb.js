#! /usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS books;

CREATE TABLE IF NOT EXISTS authors (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  genre VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  book VARCHAR ( 255 )
);

INSERT INTO authors (author) 
VALUES
  ('Haruki Murakami'),
  ('Alexandre Dumas'),
  ('Stephen King');

INSERT INTO genres (genre) 
VALUES
  ('Magical realism'),
  ('Adventure'),
  ('Post-apocalyptic');

INSERT INTO books (book) 
VALUES
  ('Kafka On The Shore'),
  ('The Count of Monte Cristo'),
  ('The Stand');
`;

async function main() {
	const dbUrl = process.argv[2] || process.env.DATABASE_URL;

	console.log('seeding...');
	const client = new Client({
		connectionString: dbUrl,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log('done');
}

main();

// author_id INTEGER REFERENCES authors(id),
// genre_id INTEGER REFERENCES genres(id)