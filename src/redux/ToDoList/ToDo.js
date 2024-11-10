import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    List : []
}

const ToDoLists = createSlice({
    name: 'ToDo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            state.List.push(action.payload);
        },
        deleteTodo:(state, action)=>{
            state.List = state.List.filter(todo => todo.id !== action.payload);
        },
        clearTodos:(state, action)=>{
            state.List = [];
        },
    }
})

console.log('Action ', ToDoLists.initialState);
export const {addTodo, deleteTodo, clearTodos} = ToDoLists.actions;
export default ToDoLists;