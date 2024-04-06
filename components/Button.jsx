import React from 'react'
import PropTypes from 'prop-types';

export default function Button({ children, handleClick }) {
    console.log(children);
  return (
      <button onClick={handleClick} className='bg-amber-500 px-10 m-2 py-1 rounded-md text-white'>{children}</button>
  )
}

Button.propTypes = {
    children: PropTypes.string,
    handleClick: PropTypes.func,
}
