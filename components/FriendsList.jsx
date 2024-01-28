import React from 'react'
import Friend from './Friend'
import PropTypes from 'prop-types'
import AddNewFriendForm from './AddNewFriendForm';

export default function FriendsList({ friendList, isSelected, show, onHandleAddNewFriend, onHandleSelect }) {

  return (
      <div className='mx-2'>
          {friendList.map((friend, i) => (
              <Friend  key={i} friend={friend} isSelected={isSelected} onHandleSelect={onHandleSelect}/>
          ))}
          {show && 
          <>
          <AddNewFriendForm onHandleAddNewFriend={onHandleAddNewFriend}/>
          </>
          }
      </div>
  )
}

FriendsList.propTypes = {
    show: PropTypes.bool,
    friendList: PropTypes.array,
    isSelected: PropTypes.string,
    onAddFriend: PropTypes.func,
    onHandleAddNewFriend: PropTypes.func,
    onHandleSelect: PropTypes.func
}
