import { configureStore } from '@reduxjs/toolkit'
import  matodoSlice  from './todo'
export default configureStore({
    reducer: {
        matodo:matodoSlice
    },
  })