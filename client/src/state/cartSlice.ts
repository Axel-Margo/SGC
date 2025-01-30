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
            state.totalAmount += action.payload.price
            state.totalItems++
        },
        removeFromCart: (state, action) => {
            state.items.filter((item) => item.id !== action.payload.id)
            state.totalAmount -= action.payload.price
            state.totalItems--
                }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer