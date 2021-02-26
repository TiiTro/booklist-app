import React from 'react';
import Button from './Button.jsx';

const Book = ({ title, author, comments, index, onClick}) => {
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
      <Button
        buttonText={"Poista"}
        onClick={onClick}
      />
    </div>
  )
}

export default Book;
