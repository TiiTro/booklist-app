import { useState, useEffect } from 'react';
import axios from 'axios';

import AddNewBookForm from './blocks/AddNewBookForm.jsx';

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

  const Book = ({ title, author, comments, id }) => {
    // console.log({id})
    // console.log({title})
    console.log({comments})
    return (
      <li key={id}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{comments}</p>
      </li>
    )
  }

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

  return (
    <div>
      <AddNewBookForm 
        newTitle={newTitle}
        newAuthor={newAuthor}
        onSubmit={addBook}
        handleNewTitle={handleNewTitle}
        handleNewAuthor={handleNewAuthor}
        newComment={newCom}
        handleNewCom={handleNewCom}
         />
      <br></br>
      <div>
        <h1>Luetut kirjat</h1>
        <ul style={{listStyleType: "none"}}>
          {books.map(book =>
            <Book title={book.title} author={book.author} comments={book.comment} id={book.id}/>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App;
