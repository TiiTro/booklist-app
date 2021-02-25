import React from 'react';

const Book = ({ title, author, comments, id }) => {
  // console.log({id})
  // console.log({title})
  // console.log({comments})
  return (
    <div>
      <li key={id}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{comments}</p>
      </li>      
    </div>
    
  )
}

export default Book;
