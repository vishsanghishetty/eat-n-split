import React from 'react'

export default function SplitBill() {
  return (
    <form className='bg-yellow-100 w-1/5 py-2 mx-2'>
      <h3>SPLIT A BILL WITH { }</h3>
      <div>
        Bill value 
        <input type="number" />
      </div>
      <div>
        Your expense
        <input type="number" />
      </div>
      <div>
        {} s expense
        <input type="number" />
      </div>
      <div>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </form>
  )
}
