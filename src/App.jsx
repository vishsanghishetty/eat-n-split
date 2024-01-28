import React, { useState } from 'react'
import FriendsList from '../components/FriendsList'
import SplitBill from '../components/SplitBill';


export default function App() {
  const [friendList, setFriendList] = useState([])
  const [show, setShow] = useState(false)
  const btnText = show ? 'Close' : 'Add Friend';
  const [selectedFriend, setSelectedFriend] = useState(false)
  const isSelected = selectedFriend ? 'Close' : 'Select';
    function handleDisplay() {
        setShow(!show)
    }
  function handleAddNewFriend(newFriend) {
    setFriendList([...friendList, {name: newFriend.name, image: newFriend.image}])
  }

  function handleDisplaySelectFriend(friendName) {
    console.log('You clicked on ' + friendName);
    // setSelectedFriend(!selectedFriend);

  
  }
 
  return (
    <div className='flex'>
      <div>
      <FriendsList friendList={friendList} show={show} isSelected={isSelected} onHandleAddNewFriend={handleAddNewFriend} onHandleSelect={handleDisplaySelectFriend}/>
        <button className='bg-amber-500 px-10 m-2 py-1 rounded-md text-white' onClick={handleDisplay}>{btnText}</button>
        </div>
      <div className='py-4 place-items-center w-full'>
        {selectedFriend && <SplitBill/>}
      </div>
    </div>
  )
}

