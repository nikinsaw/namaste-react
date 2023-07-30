import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const appStore = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    cart: cartReducer
  }
})

export default appStore