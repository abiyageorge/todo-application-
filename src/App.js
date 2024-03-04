import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Listtodo from './components/Listtodo';
import React, { useState } from 'react'

function App() {
  const[uploadTodoStatus,setUploadTodoStatus]=useState({})
return(
  <div className='d-grid justify-content-center align-items-center'>
    
    <Addtodo setUploadTodoStatus={setUploadTodoStatus}/>
  
    <Listtodo uploadTodoStatu ={uploadTodoStatus}/>

  </div>
)




}
 

export default App;
