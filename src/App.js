import { useState } from 'react';

const App = () => {
  // const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState('')

  const addBook = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target.value)
  }

  //event handler sets the state for new book to be the value of input
  const handleNewBook = (event) => {
    console.log(event.target.value)
    setNewBook(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addBook}>
        <label>
          Kirjan nimi:
        </label>
        <input value={newBook} onChange={handleNewBook}/>
        <button type="submit">Tallenna</button>
      </form>
    </div>
  )
}

export default App;
