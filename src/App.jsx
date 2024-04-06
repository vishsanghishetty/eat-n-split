import React, { useState } from 'react'
import FriendsList from '../components/FriendsList'
import SplitBill from '../components/FormSplitBill.jsx';
import list from '../src/initialList.js';
import Button from '../components/Button.jsx';
import AddNewFriendForm from '../components/AddNewFriendForm.jsx';


export default function App() {
  const [friendList, setFriendList] = useState(list)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const btnText = showAddFriend ? 'Close' : 'Add Friend';
  const [selectedFriend, setSelectedFriend] = useState(null);
  
  function handleSplitBill(value) {
    console.log(value);
    
    setFriendList((friendList) => friendList.map((friend) => {
      //if friend.id matches selectedFriend.id, the function returns a new object with the updated balance.
    return friend.id === selectedFriend.id ? ({...friend, balance: friend.balance + value}) : friend
    }
    ))
    setSelectedFriend(null);
  }
  function handleClick() {
        setShowAddFriend(!showAddFriend)
    }
  function handleAddNewFriend(newFriend) {
    setFriendList([...friendList, newFriend])
  }

  function handleSelection(newFriend) {
    setSelectedFriend((prev) => prev?.id === newFriend?.id ? null : newFriend) 
  }


  return (
    <div className='flex'>
      <div>
      <h5>Eat and split the bill</h5>
      </div>
      <div>
        <FriendsList friendList={friendList} selectedFriend={selectedFriend} onSelection={handleSelection} />
        <Button handleClick={handleClick}>{btnText}</Button>
        {showAddFriend && <AddNewFriendForm onHandleAddNewFriend={handleAddNewFriend} showAddFriend={showAddFriend}/>}
      </div>
      <div className='py-4 place-items-center w-full'>
        {selectedFriend && <SplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
      </div>
    </div>
  )
}

