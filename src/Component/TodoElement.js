import React from 'react'
import { useDispatch } from 'react-redux'
import {isDonehandle,handleDelete} from '../Redux/todo'
const TodoElement = ({todos}) => {
    const dispatch=useDispatch()
  return (
    <div>
      <ol className="todolist">
      {todos.firstName}
      <div class="frame">
      <button class="custom-btn btn-3" onClick={()=>dispatch(isDonehandle(todos.id))}><span>{todos.isDone? 'Yes':'No'}</span></button>
      <button class="custom-btn btn-5" onClick={()=>dispatch(handleDelete(todos.id))}><span>Delete</span></button>
      </div>
      </ol>
    </div>
  )
}

export default TodoElement
