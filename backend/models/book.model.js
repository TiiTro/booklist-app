const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String
});

// Modifying the mongoose id to be a string, deleting _id and __v fields from schema
bookSchema.set('toJSON', {
    transform: (doc, returnedObject, options) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;