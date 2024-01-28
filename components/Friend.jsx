import React from 'react'
import PropTypes from 'prop-types';

export default function Friend({ friend, onHandleSelect, isSelected }) {

    return (
      <div className='flex py-4 place-items-center h-34 space-x-6'>
          <div className='flex text-black'>
              <img src={`${friend.image}`} alt="image" className='object-cover rounded-full h-20 w-20'/>
          </div>
          <div>
              {friend.name}
              </div>
       <div>
          <button className='bg-amber-500 px-4 py-1 m-4 rounded-md text-white' onClick={() => onHandleSelect(friend.name)}>{isSelected}</button>
      </div>
      </div>
  )
}
Friend.propTypes = {
    friend: PropTypes.object,
    isSelected: PropTypes.string,
    onHandleSelect: PropTypes.func
}
