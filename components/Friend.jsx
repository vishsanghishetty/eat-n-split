import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

export default function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
      <div className='flex py-4 place-items-center h-34 space-x-6'>
          <div className='flex text-black'>
              <img src={`${friend.image}`} alt="image" className='object-cover rounded-full h-30 w-40'/>
          </div>
          <h3>
                {friend.name}
            </h3>
           
            {friend.balance < 0 &&
                (<p className='text-red-500'><br></br>
                You owe {friend.name} {Math.abs(friend.balance)}💰</p>)
            }
             {friend.balance > 0 &&
                (<p className='text-green-500'><br></br>
                {friend.name} owes you {Math.abs(friend.balance)}💰</p>)
            }
             {friend.balance === 0 &&
                (<p className='text-black'><br></br>
                You and {friend.name} are even</p>)
            }
       <div>
                <Button className='bg-amber-500 px-4 py-1 m-4 rounded-md text-white' handleClick={() => onSelection(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
      </div>
      </div>
  )
}
Friend.propTypes = {
    friend: PropTypes.object,
    selectedFriend: PropTypes.object,
    onSelection: PropTypes.func
}
