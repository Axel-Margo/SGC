import { createSlice } from '@reduxjs/toolkit';
import { CartContent } from '../types/Cart';

const initialState: CartContent = {
    items: [],
    totalAmount: 0 ,
    totalItems: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : { 
        addToCart: (state, action) => {
            state.items.push(action.payload)
            state.totalAmount += Number(action.payload.price)
            state.totalItems++
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.items.findIndex((item) => item.id == action.payload.id)
            state.items.splice(itemToRemove, 1)
            state.totalAmount -= Number(action.payload.price)
            state.totalItems--
                }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer