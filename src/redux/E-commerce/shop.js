import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    Items: [],
    Carts: []
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
        addToCart:(state,action) =>{
            let id = action.payload;

            let obj = {
                'id': id,
                'qty': 1
            }
            state.Carts.push(obj);
        }
    },
})
console.log('Actions initialState ', Shops.initialState);

export const  { AddItem,addToCart } = Shops.actions;

export default Shops;