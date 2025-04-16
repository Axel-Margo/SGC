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
            const itemToRemoveIndex = state.items.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (itemToRemoveIndex !== -1) {
              const itemPrice = Number(state.items[itemToRemoveIndex].price);
              state.items.splice(itemToRemoveIndex, 1);
              state.totalAmount -= itemPrice;
              state.totalItems--;
            }
          },
        
        cleanCart: (state) =>{
            state.items = []
            state.totalAmount = 0
            state.totalItems = 0
        }
    }
})

export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions

export default cartSlice.reducer