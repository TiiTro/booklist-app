import React, { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './services/books.js';

import AddNewBookForm from './blocks/AddNewBookForm.jsx';
import BookList from './blocks/BookList.jsx';
import EditBookForm from './blocks/EditBookForm';

const App = () => {
  const [books, setBooks] = useState([])
  const [bookTitle, setbookTitle] = useState('')
  const [bookAuthor, setbookAuthor] = useState('')
  const [bookComments, setbookComments] = useState('')
  const [bookId, setBookId] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);


  // fetching all books
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialBooks => {
        setBooks(initialBooks)
      })
  }, [])

  console.log(books)

  // Adding a book
  const addBook = (event) => {
    event.preventDefault()
    const bookObject = {
      title: bookTitle,
      author: bookAuthor,
      comments: bookComments
    }

    console.log("Kirja lisätään", bookObject)
    // console.log(books)

    axios.post('http://localhost:4000/books/add', bookObject)
      .then(res => {
        // use concat to add new object without modifying state directly!
        setBooks(books.concat(bookObject))
        console.log("axios", res.data)
      });

    setbookTitle('')
    setbookAuthor('')
    setbookComments('')
  }

  //event handler sets the state for new book to be the value of input
  const handlebookTitle = (event) => {
    console.log(event.target.value)
    setbookTitle(event.target.value)
  }

  const handlebookAuthor = (event) => {
    console.log(event.target.value)
    setbookAuthor(event.target.value)
  }

  const handlebookComments = (event) => {
    console.log(event.target.value)
    setbookComments(event.target.value)
  }

  const openEdit = (book) => {
    console.log("Edit", book.id, book.title)
    setModalIsOpen(true)

    setbookTitle(book.title)
    setbookAuthor(book.author)
    setbookComments(book.comments)
    setBookId(book.id)
  }

  // closing modal without editing
  const closeModal = () => {
    setModalIsOpen(false)
    setbookTitle('')
    setbookAuthor('')
    setbookComments('')
  }

  // Edit a book
  const handleEdit = (event) => {
    event.preventDefault()
    console.log("Submitting edit")

    const updateId = bookId

    const bookObject = {
      title: bookTitle,
      author: bookAuthor,
      comments: bookComments,
    }
    
    console.log(bookObject);
    console.log(updateId);

    axios.post('http://localhost:4000/books/update/'+updateId, bookObject)
      .then(updatedBook => {
        console.log("axios, muokataan", updatedBook.data)
        setBooks(books.map(book => book.id !== updatedBook.id ?
          book : updatedBook));
      })
    console.log("muokattu")
    setModalIsOpen(false)
    setbookTitle('')
    setbookAuthor('')
    setbookComments('')
    window.alert("Muokkaukset on tallennettu.")
    
  }

  // Deleting a book
  const handleDelete = (book) => {
    console.log("Delete clicked");
    console.log(book.id);

    window.confirm(`Poistetaanko ${book.title}?`) ?
      personService
        .remove(book.id)
        .then(res => {
          console.log(res.data, book.title);
        
        const updatedBookList = books.filter(b => b.id !== book.id);
        
        setBooks(updatedBookList);
        console.log("Updated book list: ", updatedBookList);
      })
      : console.log("Not removing");
  }

  return (
    <div>
      <AddNewBookForm 
        bookTitle={bookTitle}
        bookAuthor={bookAuthor}
        onSubmit={addBook}
        handlebookTitle={handlebookTitle}
        handlebookAuthor={handlebookAuthor}
        bookComments={bookComments}
        handlebookComments={handlebookComments}
         />
      <br></br>
      <div>
      <EditBookForm 
        modalIsOpen={modalIsOpen}
        bookTitle={bookTitle}
        bookAuthor={bookAuthor}
        onSubmit={handleEdit}
        handlebookTitle={handlebookTitle}
        handlebookAuthor={handlebookAuthor}
        bookComments={bookComments}
        handlebookComments={handlebookComments}
        closeModal={closeModal}
      />
        <BookList 
          books={books} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit} 
          openEdit={openEdit} 
          modalIsOpen={modalIsOpen} />
      </div>
    </div>
  )
}

export default App;
