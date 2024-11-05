import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value : []
}

const ToDoLists = createSlice({
    name: 'ToDo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{},
        deleteTodo:(state, action)=>{},
        clearTodos:(state, action)=>{},
    }
})

console.log('Action ', ToDoLists)
export const {addTodo, deleteTodo, clearTodos} = ToDoLists.actions;
export default ToDoLists;