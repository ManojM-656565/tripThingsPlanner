import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <div className="form">
       <p>What do you need for your trip....</p> 
       <form>
        <input type='number' placeholder='No.of item'></input>
        <input type='text' placeholder='Items'></input>
        <button type='submit'>Add</button>
       </form>
    </div>
  )
}

export default Form