import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
}
export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.item = [...state.item, action.payload]
        },
        removeFromCart: (state, action) => {
            state.item = state.item.filter((item) => item.id !== action.payload.id)
        },
        updateQuantity: (state, action) => {
            state.item = state.item.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity
                    }
                }
                return item
            })
        }
    }
})

export const {addToCart, removeFromCart, updateQuantity} = cart.actions;
export default cart.reducer;