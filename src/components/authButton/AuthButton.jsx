import React from 'react';
import './AuthButton.css';

const AuthButton = ({text}) => {
  return (
    <button className='auth--btn'>
      {text}
    </button>
  )
}

export default AuthButton