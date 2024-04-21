//This is the web application started building in 18-4-2024
//a travel planner web app using react 
//components
//1.header
//2.for,
//3.list
//4.footer
//sorting


import './App.css';
import { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import List from './List'
import Form from './Form'


function App() {
  const [allitem,setAllitem]=useState([]);

  function handleAddItems(newItems){
    setAllitem(allitem=>(
      [...allitem,newItems]
  
    ))

    }
    function handleToogle(id){
      setAllitem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form 
      onAddItems={handleAddItems}/>
      <List
      items={allitem}
      onToogle={handleToogle}
      
      />
      <Footer />
     
    </div>
  );
}

export default App;
