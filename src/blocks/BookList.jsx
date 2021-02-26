import React from 'react';
import Book from '../snippets/Book.jsx';

const BookList = ({ books, handleDelete }) => {
  console.log("kirjalista-komponentti", books);

  return (
    <div>
      <h1>Luetut kirjat</h1>
        <ul style={{listStyleType: "none"}}>
          {books.map((book) =>
            <Book 
              index={book.id}
              onClick={() => handleDelete(book)}
              title={book.title}
              author={book.author}
              comments={book.comments}
              id={book.id}
              />
          )}
        </ul>
    </div>
  )}

  export default BookList;