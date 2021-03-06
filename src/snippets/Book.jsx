import React from 'react';
import Button from './Button.jsx';

const Book = ({ title, author, comments, handleDelete, openEdit }) => {
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
      <div style={{ display: "flex", flexDirection: "row", marginBottom: "35px"}}>
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
    </div>
  )
}

export default Book;
