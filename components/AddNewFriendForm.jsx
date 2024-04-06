import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function AddNewFriendForm({onHandleAddNewFriend}) {
  const [formFields, setFormFields] = useState({ 
    name: '',
    image: 'https://i.pravatar.cc/75'
  })


  function handleChange(e) {
    //console.log(e.target.value);

    setFormFields({
      ...formFields,
      //[e.target.name] -> This refers to the name attribute of the HTML element that triggered the event e,
      //So, e.target.name retrieves the computed value of the name attribute of the element. name and image are the corresponding
      //name attributes of the input elements. name="name" and name="image"

      // e.target.value -> This retrieves the current value of the HTML element that triggered the event.
      // name: computed value and image: computed value

      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    const id = crypto.randomUUID();
    e.preventDefault();
    const newFriend = {
      id: id,
      name: formFields.name,
      image: `${formFields.image}?u=${id}`
    }
    onHandleAddNewFriend(newFriend)
    setFormFields({name: '', image: formFields.image })
  }
  return (
      <form className='bg-yellow-100 w-full py-2 mx-2' onSubmit={handleSubmit}>
          <div className='rounded-sm'>
          <label className='m-2'>👯 Friend name</label>
        <input className='rounded-lg py-1 m-2' type="text" value={formFields.name} onChange={handleChange} name="name" />
          </div>
          <div>
          <label className='m-3'>🌠 Image URL</label>
        <input className='rounded-md m-2 py-1' type="text" value={formFields.image} onChange={handleChange} name="image" />
      </div>
      <div className='flex justify-end'>
        <Button className='bg-amber-500 px-10 m-2 py-1 align-right rounded-md text-white' onHandleAddNewFriend={onHandleAddNewFriend}>Add</Button>
        
        </div>
    </form>
  )
}

AddNewFriendForm.propTypes = {
  onHandleAddNewFriend: PropTypes.func.isRequired,
}