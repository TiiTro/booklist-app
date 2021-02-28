import { useState, useEffect } from 'react';
import axios from 'axios';

import AddNewBookForm from './blocks/AddNewBookForm.jsx';
// import EditBookForm from './blocks/EditBookForm.jsx';
import BookList from './blocks/BookList.jsx';

const App = () => {
  const [books, setBooks] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newCom, setNewComment] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // fetching all books
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:4000/books')
      .then(res => {
        console.log('promise fulfilled')
        setBooks(res.data)
    })
  }, []) // empty array means only running useEffect after first render
  // console.log('render', books.length, 'books')
  // console.log('Here are your books: ', books)

    // Adding a book
  const addBook = (event) => {
    event.preventDefault()
    const bookObject = {
      title: newTitle,
      author: newAuthor,
      comments: newCom
    }

    console.log("Kirja lisätään", bookObject)
    // console.log(books)

    axios.post('http://localhost:4000/books/add', bookObject)
      .then(res => {
        // use concat to add new object without modifying state directly!
        setBooks(books.concat(bookObject))
        console.log("axios", res.data)
      });

    setNewTitle('')
    setNewAuthor('')
    setNewComment('')
  }

  //event handler sets the state for new book to be the value of input
  const handleNewTitle = (event) => {
    // console.log(event.target.value)
    setNewTitle(event.target.value)
  }

  const handleNewAuthor = (event) => {
    // console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleNewCom = (event) => {
    // console.log(event.target.value)
    setNewComment(event.target.value)
  }

  const openEdit = () => setModalIsOpen(true)

  //Editing a book
  const handleEdit = (book) => {
    console.log("Edit", book.id, book.title)
    // setModalIsOpen(true)
    
    // axios.get('http://localhost:4000/books/'+book.id)
    //   .then(res => {
    //     console.log("haetaan tiedot", res.data.title)
    //     const editableTitle = res.data.title
    //     console.log(editableTitle)
    //   })
    
  }
  
  // Deleting a book
  const handleDelete = (book) => {
    console.log("Delete clicked");
    console.log(book.id);

    window.confirm(`Poistetaanko ${book.title}?`) ?
      axios.delete('http://localhost:4000/books/'+book.id)
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
        newTitle={newTitle}
        newAuthor={newAuthor}
        onSubmit={addBook}
        handleNewTitle={handleNewTitle}
        handleNewAuthor={handleNewAuthor}
        newCom={newCom}
        handleNewCom={handleNewCom}
         />
      <br></br>
      <div>
        <BookList books={books} handleDelete={handleDelete} handleEdit={handleEdit} openEdit={openEdit} modalIsOpen={modalIsOpen} />
      </div>
    </div>
  )
}

export default App;
