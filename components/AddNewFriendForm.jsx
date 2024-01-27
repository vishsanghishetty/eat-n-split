import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddNewFriendForm({onHandleAddNewFriend}) {
  const [formFields, setFormFields] = useState({ 
    name: '',
    image: ''
  })


  function handleChange(e) {
    console.log(e.target.value);

    setFormFields({
      ...formFields,
      //[e.target.name] -> This refers to the name attribute of the HTML element that triggered the event e,
      //So, e.target.name retrieves the computed value of the name attribute of the element. name: value and image: value

      // e.target.value -> This retrieves the current value of the HTML element that triggered the event.
      // name: computed value and image: computed value

      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      id: Date.now(),
      name: formFields.name,
      image: formFields.image
    }
    onHandleAddNewFriend(newFriend)
    setFormFields({name: '', image: ''})
  }
  return (
      <form className='bg-yellow-100 w-1/5 py-2' onSubmit={handleSubmit}>
          <div className='rounded-sm'>
          <label className='m-2'>👯 Friend name</label>
        <input className='rounded-lg py-1 m-2' type="text" value={formFields.name} onChange={handleChange} name="name" />
          </div>
          <div>
          <label className='m-3'>🌠 Image URL</label>
        <input className='rounded-md m-2 py-1' type="text" value={formFields.image} onChange={handleChange} name="image" />
      </div>
      <div className='flex justify-end'>
        <button className='bg-amber-500 px-10 m-2 py-1 align-right rounded-md text-white'>Add</button>
        </div>
    </form>
  )
}

AddNewFriendForm.propTypes = {
onHandleAddNewFriend: PropTypes.func
}