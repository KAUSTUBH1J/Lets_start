import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import toDoList from './ToDoList/ToDo'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo : toDoList
  },
})