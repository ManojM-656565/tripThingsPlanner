import React from 'react'
import { useState } from 'react';
import './Form.css';

const Form = ({onAddItems}) => {
  function handleSubmit(e){
    e.preventDefault();
    if (!des) return
    const newItems={items,des,id:Date.now(),isPacked:true}

    onAddItems(newItems)
    setItems(0);
    setDes('');
  
  }
  const [items,setItems]=useState(0);
  const [des,setDes]=useState('');

  return (
    <div className="form">
       <p>What do you need for your trip....</p> 
       <form onSubmit={handleSubmit}>
        <input 
        type='number' 
        placeholder='No.of item'
        value={items}
        onChange={(e)=>setItems(e.target.value)}
        />

         
        <input
        type='text'
        placeholder='Items'
        value={des}
        onChange={(e)=>setDes(e.target.value)}
        />
        <button type='submit' >Add</button>
       </form>
    </div>
  )
}
export default Form