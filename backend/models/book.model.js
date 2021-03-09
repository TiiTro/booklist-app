const mongoose = require('mongoose');

// Telling Mongoose how the database object should be like
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    comments: String
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