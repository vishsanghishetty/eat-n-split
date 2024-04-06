import React from 'react'
import Friend from './Friend'
import PropTypes from 'prop-types'

export default function FriendsList({ friendList, selectedFriend, onSelection }) {

  return (
      <div className='mx-2'>
          {friendList.map((friend, i) => (
              <Friend  key={i} friend={friend} selectedFriend={selectedFriend}  onSelection={onSelection}/>
          ))}
      </div>
  )
}

FriendsList.propTypes = {
    friendList: PropTypes.array,
    selectedFriend: PropTypes.object,
    onAddFriend: PropTypes.func,
    onSelection: PropTypes.func
}
