import React, { useState } from 'react'
import { uploadTodo } from '../services/allAPI';

function Addtodo({setUploadTodoStatus}) {
    const [todoValue, setToDoValue] = useState({
       todoName:"",
       todoDescription:""
    })
    console.log("=1=");
    console.log(todoValue);
    const handleAdd=async()=>{
     const {todoName,todoDescription}=todoValue;
    if(!todoName || !todoDescription){
     alert("Please fill the form completely")
    }
    else{
     const response= await uploadTodo(todoValue)  
     alert("Successfully inserted the TODO item");
     setUploadTodoStatus(response.data)
     setToDoValue({
        todoName:"",
        todoDescription:""
        
     })
      
    }
}

    return (
        <>
            <div>
                <h3 className='text-primary mt-5 mb-3'>TODO APPLICATION</h3>
                <div className='mt-3'>
                    <input type="text" className='form-control border-primary'
                    value={todoValue.todoName} 
                    onChange={(e)=>  setToDoValue({...todoValue,todoName: e.target.value} )}

                    />
                    

                </div>
                <div className='mt-3'>
                    <textarea id="w3review" name="w3review" rows="3" cols="30"
                    value={todoValue.todoDescription}
                        className='form-control border-primary'
                        onChange={(e)=>  setToDoValue({...todoValue,todoDescription: e.target.value} )}
                        >
                    </textarea>

                </div>
                <button className='btn w-100 mt-3 btn-primary'onClick={handleAdd}>ADD TODO ITEM</button>



            </div>
        </>
    )
}

export default Addtodo