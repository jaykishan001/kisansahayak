import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
          },
          
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        updateQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity
                    }
                }
                return item
            })
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;