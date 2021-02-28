import React from 'react';
import EditBookForm from '../blocks/EditBookForm.jsx';
import Button from './Button.jsx';

const Book = ({ title, author, comments, handleDelete, openEdit, modalIsOpen, children }) => {
  // console.log({id})
  // console.log({title})
  // console.log({comments})
  // console.log(title, index);
  return (
    <div>
      <li>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{comments}</p>
      </li>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <Button
          value={"Muokkaa"}
          buttonText={"Muokkaa"}
          onClick={openEdit}
        />
        <Button
          value={"Poista"}
          buttonText={"Poista"}
          onClick={handleDelete}
        />
      </div>
      {children}
    </div>
  )
}

export default Book;
