import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    Items: []
}

const Shops = createSlice({
    name: 'Item',
    initialState,
    reducers: {
        AddItem: (state,action) => {
            console.log('hello');
          state.Items.push(action.payload);
          console.log("action---", action.payload)
        },
        
    },
})
console.log('Actionss ', Shops.initialState);

export const  { AddItem } = Shops.actions;

export default Shops;