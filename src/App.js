import { useState, useEffect } from 'react';
import axios from 'axios';

import AddNewBookForm from './blocks/AddNewBookForm.jsx';
import BookList from './blocks/BookList.jsx';

const App = () => {
  const [books, setBooks] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newCom, setNewComment] = useState('')

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

  const addBook = (event) => {
    event.preventDefault()
    const bookObject = {
      title: newTitle,
      author: newAuthor,
      comment: newCom
    }

    console.log(bookObject)
    // console.log(books)

    axios.post('http://localhost:4000/books/add', bookObject)
      .then(res => {
        // use concat to add new object without modifying state directly!
        setBooks(books.concat(bookObject))
        console.log(res.data)
      });

    setNewComment('')
    setNewTitle('')
    setNewAuthor('')
  }

  //event handler sets the state for new book to be the value of input
  const handleNewTitle = (event) => {
    console.log(event.target.value)
    setNewTitle(event.target.value)
  }

  const handleNewAuthor = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleNewCom = (event) => {
    console.log(event.target.value)
    setNewComment(event.target.value)
  }
  
  const handleDelete = (book) => {
    console.log("Delete clicked");
    console.log(book.id);

    axios.delete('http://localhost:4000/books/'+book.id)
      .then(res => {
        console.log(res.data, book.title);
      
      const updatedBookList = books.filter(b => b.id !== book.id);
      
      setBooks(updatedBookList);
      console.log("Updated book list: ", updatedBookList);
      })
  }

  return (
    <div>
      <AddNewBookForm 
        newTitle={newTitle}
        newAuthor={newAuthor}
        onSubmit={addBook}
        handleNewTitle={handleNewTitle}
        handleNewAuthor={handleNewAuthor}
        // newComment={newCom}
        // handleNewCom={handleNewCom}
         />
      <br></br>
      <div>
        <BookList books={books} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App;
