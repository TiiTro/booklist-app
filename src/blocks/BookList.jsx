import React from 'react';
import Book from '../snippets/Book.jsx';
import EditBookForm from '../blocks/EditBookForm.jsx';

const BookList = ({ books, handleDelete, handleEdit, openEdit, modalIsOpen }) => {
  // console.log("kirjalista-komponentti", books);

  return (
    <div>
      <h1>Luetut kirjat</h1>
        <ul style={{listStyleType: "none", paddingInlineStart: "0"}}>
          {books.map((book) =>
            <Book
              key={book.id}
              handleDelete={() => handleDelete(book)}
              handleEdit={handleEdit}
              openEdit={() => openEdit(book)}
              title={book.title}
              author={book.author}
              comments={book.comments}
              id={book.id}
              modalIsOpen = {modalIsOpen}
            />
          )}
        </ul>
    </div>
  )}

  export default BookList;