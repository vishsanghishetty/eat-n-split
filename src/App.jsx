import React, { useState } from 'react'
import FriendsList from '../components/FriendsList'


export default function App() {
  const [friendList, setFriendList] = useState([])
  const [show, setShow] = useState(false)
    const btnText = show ? 'Close' : 'Add Friend';
    function handleDisplay() {
        setShow(!show)
    }
  function handleAddNewFriend(newFriend) {
    setFriendList([...friendList, {name: newFriend.name, image: newFriend.image}])
  }
 
  return (
    <div>
      <FriendsList friendList={friendList} show={show} onHandleAddNewFriend={handleAddNewFriend}/>
      <button className='bg-amber-500 px-12 m-2 rounded-md text-white' onClick={handleDisplay}>{btnText}</button>
    </div>
  )
}

