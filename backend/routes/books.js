
const routes = require('express').Router();
// requiring the mongoose model for a book
let Book = require('../models/book.model.js');

// end point handling incoming GET-requests on the books-path (ending with '/')
routes.route('/').get((req, res) => {
    //find() will get all the books from the database 
    Book.find()
    // response is returned in json form
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

// end point handling POST-requests on the books-path ending with '/add'
routes.route('/add').post((req, res) => {
    //assign the infromation to variables
    const booktitle = req.body.booktitle;
    const author = req.body.author;

    //Creating a new book with the variables assigned above
    const newBook = new Book({
        booktitle,
        author
    });

    newBook.save()
        .then(() => res.json('Book added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = routes;