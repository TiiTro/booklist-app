import React from 'react';
import Book from '../snippets/Book.jsx';
import EditBookForm from '../blocks/EditBookForm.jsx';

const BookList = ({ books, handleDelete, handleEdit, openEdit, modalIsOpen, children }) => {
  console.log("kirjalista-komponentti", books);

  return (
    <div>
      <h1>Luetut kirjat</h1>
        <ul style={{listStyleType: "none"}}>
          {books.map((book) =>
            <Book
              key={book.id}
              handleDelete={() => handleDelete(book)}
              handleEdit={() => handleEdit(book)}
              openEdit={openEdit}
              title={book.title}
              author={book.author}
              comments={book.comments}
              id={book.id}
              modalIsOpen = {modalIsOpen}
            >
            <EditBookForm 
              modalIsOpen={modalIsOpen}
              editableTitle={book.title}
              editableAuthor={book.author}
              editableComment={book.comment}
              // newAuthor={newAuthor}
              // onSubmit={addBook}
              // handleNewTitle={handleNewTitle}
              // handleNewAuthor={handleNewAuthor}
              // newCom={newCom}
              // handleNewCom={handleNewCom}
            />
            </ Book>
          )}
        </ul>
    </div>
  )}

  export default BookList;