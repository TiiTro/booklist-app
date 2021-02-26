import React from 'react';

const Button = ({ type, buttonText, onClick }) => {
  return(
    <div>
      <button type={type} onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default Button;
