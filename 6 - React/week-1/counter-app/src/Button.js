import React from 'react';

const Button = ({ addOne }) => {
  return (
    <button onClick={addOne}>
      Add 1!
    </button>
  );
};

export default Button;
