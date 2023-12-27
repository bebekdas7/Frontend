import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:'cart',
    initialState:{
        value: false,
        items:[],
    },
    reducers:{
        setCartOpen:(state, action)=>{
            state.value= action.payload;
        },
        addToCart:(state, action)=>{
            const {locationData, activeSize} = action.payload
            state.items.push({
                locationData,
                activeSize
            })
        },
        deleteCartItem: (state, action) => { 
            const index = action.payload;
            state.items.splice(index, 1);
        },
    },
})

export const{setCartOpen, addToCart, deleteCartItem}= cartSlice.actions;
export default cartSlice.reducer;