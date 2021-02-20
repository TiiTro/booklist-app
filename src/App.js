import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')

  const addBook = (event) => {
    event.preventDefault()
    const bookObject = {
      title: newTitle,
      author: newAuthor,
      id: books.length + 1,
    }

    console.log(bookObject)

    // use concat to add new object without modifying state directly!
    // setBooks(books.concat(bookObject))
    console.log(books)

    axios.post('http://localhost:4000/books/add', bookObject)
      .then(res => console.log(res.data));

    setNewTitle('')
    setNewAuthor('')
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

  return (
    <div>
      <form onSubmit={addBook}>
        <label>
          Kirjan nimi:
        </label>
        <input value={newTitle} onChange={handleNewTitle}/>
        <br></br>
        <br></br>
        <label>
          Kirjoittaja:
        </label>
        <input value={newAuthor} onChange={handleNewAuthor}/>
        <button type="submit">Tallenna</button>
      </form>
      <br></br>
      <div>
        <h1>Luetut kirjat</h1>
      </div>
    </div>
  )
}

export default App;
