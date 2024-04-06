import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  
  const [formFieldsSplitBill, setFormFieldsSplitBill] = React.useState({
    billValue: '',
    paidByUser: '',
    whoPays: 'user',
  })
   const friendPays = formFieldsSplitBill.billValue ? formFieldsSplitBill.billValue - formFieldsSplitBill.paidByUser : ''
  function handleSubmit(e) {
    e.preventDefault();
    if (!formFieldsSplitBill.billValue || !formFieldsSplitBill.paidByUser) return;
    onSplitBill(formFieldsSplitBill.whoPays === 'user' ? friendPays : -formFieldsSplitBill.paidByUser)
  }

  function handleChange(e) {
    
    const { name, value } = e.target;
  let newValue = typeof value === 'string' ? value : Number(value);

  if (name === 'paidByUser' && newValue > formFieldsSplitBill.billValue) {
    newValue = formFieldsSplitBill.billValue;
  }

  setFormFieldsSplitBill({
    ...formFieldsSplitBill,
    [name]: newValue,
  });
  }

  return (
    <form className='bg-yellow-100 w-4/12 h-56 py-2 mx-2' onSubmit={handleSubmit}>
      <h1>SPLIT A BILL WITH {(selectedFriend.name).toUpperCase()}</h1>
      <br></br>

        <label> 💲💲 Bill value 💵 :</label>
      <input type="text" name="billValue" value={formFieldsSplitBill.billValue} onChange={handleChange} />
      <br></br>
      <br></br>
        <label> 💲💲 Your expense 💵 : </label>
      <input type="text" name="paidByUser" value={formFieldsSplitBill.paidByUser} onChange={handleChange} />
      <br></br>
      <br></br>
      <label>💲💲 {selectedFriend.name}&apos;s expense 💵 :
        <input type="text" disabled name="friendExpense" value={friendPays}/>
        <br></br>
      </label>
      <br></br>
      <hr></hr>
      <label> 🤑 Who is paying the bill 🤑</label>
      <select name="whoPays" onChange={handleChange}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
      </select>
      <br></br>
      <Button>Split</Button>
    </form>
  )
}
FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object,
  onSplitBill: PropTypes.func
}