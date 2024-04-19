import React from 'react';

import './List.css';
const data=[
  
  { 
    id: 1,
    description: "Passports", 
    quantity: 2, 
    packed: false },
  { id: 2,
    description: "Socks",
    quantity: 12, 
    packed: false
   },

];



const List = () => {
  return (
    <ul className="list">
      {
       data.map((data)=>
      <Item data={data}/>
      )
      }

    </ul>
  )
}


const Item = ({data}) => {
  return (
    <li className="">
      <input type='checkbox'></input>
         <p>{data.description}</p>

    </li>
  )
}


export default List