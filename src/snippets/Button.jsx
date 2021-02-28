import React from 'react';

const Button = ({ value, type, buttonText, onClick }) => {
  return(
    <div>
      <button value={value} type={type} onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default Button;
