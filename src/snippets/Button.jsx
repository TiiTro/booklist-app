import React from 'react';

const Button = ({ type, buttonText }) => {
  return(
    <div>
      <button type={type}>{buttonText}</button>
    </div>
  )
}

export default Button;
