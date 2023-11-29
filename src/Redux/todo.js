import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const matodoSlice = createSlice({
  name: 'matodo',
  initialState:[
    {id:uuidv4(),firstName:'Nana',isDone:false},
    {id:uuidv4(),firstName:'Ben',isDone:false},
    {id:uuidv4(),firstName:'Awal',isDone:false},
  ],
  reducers:{
     handleAdd:(state,action)=>{
         const newTask={
          id:uuidv4(),
          firstName:action.payload,
          isDone:false
         }
         state.push(newTask)
     },
     isDonehandle:(state,action)=>{
      const task=state.find(el=>el.id ===action.payload)
      task.isDone =!task.isDone
     },
    handleDelete:(state,action)=>{
      state=state.filter(el=>el.id !==action.payload)
       return state
    }
    },
})
export const{handleAdd,isDonehandle,handleDelete}=matodoSlice.actions
export default matodoSlice.reducer