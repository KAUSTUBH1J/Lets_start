import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import Shop from './E-commerce/shop'
import toDoList from './ToDoList/ToDo'
export const store = configureStore({
  reducer: {
    todo : toDoList.reducer,
    shops : Shop.reducer,
    counter: counterReducer,
  },
})