import { createSlice } from "@reduxjs/toolkit";

// Create a slice of state for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state directly here because it's simpler and
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      state.items.pop()
    },
    clearCart: state => {
      state.items.length = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer