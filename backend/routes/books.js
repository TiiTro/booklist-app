
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
    const title = req.body.title;
    const author = req.body.author;
    const comments = req.body.comments;
    const date = Date.parse(req.body.date);

    //Creating a new book with the variables assigned above
    const newBook = new Book({
        title,
        author,
        comments,
        date
    });

    newBook.save()
        .then(() => res.json('Book added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//id is mongoDB object id. Returning book by id as json.
routes.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Deleting a book by id
routes.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Updating a book
routes.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            // assigning the updated information to variables that already exist
            book.title = req.body.title;
            book.author = req.body.author;
            book.comments = req.body.comments;
            book.date = req.body.date;

            book.save()
                .then(() => res.json('Book updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = routes;