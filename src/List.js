import React from 'react';

import './List.css';
// const data=[
  
//   { 
//     id: 1,
//     description: "Passports", 
//     quantity: 2, 
//     packed: false },
//   { id: 2,
//     description: "Socks",
//     quantity: 12, 
//     packed: false
//    },
//   { 
//     id: 1,
//     description: "Passports", 
//     quantity: 2, 
//     packed: false },
//   { id: 2,
//     description: "Socks",
//     quantity: 12, 
//     packed: false
//    },
//   { 
//     id: 1,
//     description: "Passports", 
//     quantity: 2, 
//     packed: false },
//   { id: 2,
//     description: "Socks",
//     quantity: 12, 
//     packed: false
//    },
//   { 
//     id: 1,
//     description: "Passports", 
//     quantity: 2, 
//     packed: false },
//   { id: 2,
//     description: "Socks",
//     quantity: 12, 
//     packed: false
//    },

// ];



const List = ({items,onToogle}) => {

  
  return (
    <ul className="list">
      {
       items.map((items)=>
      <Item items={items}
      onToogle={onToogle}
      />
      )
      }

    </ul>
  )
}


const Item = ({items,onToogle}) => {


  return (
    <li className="">
      <input 
      type='checkbox'
      value={items.isPacked}
      onChange={onToogle(items.id)}

      /> 
         <span style= {items.isPacked ?{textDecoration:"line-through"}:{}}>{items.items}{items.des}</span>
         <button>❌</button>

    </li>
  )
}



export default List