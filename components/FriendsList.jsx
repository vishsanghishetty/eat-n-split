import React from 'react'
import Friends from './Friends'
import PropTypes from 'prop-types'
import AddNewFriendForm from './AddNewFriendForm';

export default function FriendsList({ friendList, show, onHandleAddNewFriend }) {

  return (
      <div>
          {friendList.map((friend, i) => (
              <Friends  key={i} friend={friend}/>
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
    onAddFriend: PropTypes.func,
    onHandleAddNewFriend: PropTypes.func
}
