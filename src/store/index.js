import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import usersReducer from './usersSlice'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: usersReducer,
    cart: cartReducer
  }
})

export default store