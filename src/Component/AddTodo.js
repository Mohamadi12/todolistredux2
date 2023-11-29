import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../Redux/todo'

const AddTodo = () => {
    const dispatch=useDispatch()
    const[firstName,setFirstName]=useState('')
    const handle=()=>{
        dispatch(handleAdd(firstName))
        setFirstName('')
    }
  return (
    <div>
     <form className="form">
      <input id="inputtask" type="text" placeholder="Enter your task here" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <button type="button" id="addbutton" onClick={()=>handle()}>AddTask</button>
     </form>
    </div>

  )
}

export default AddTodo
