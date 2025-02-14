import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  isLoading: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart (state, action) {
      state.list = action.payload
    },
    setIsCartLoading (state, action) {
      state.isLoading = action.payload
    }
  }
})

export const getCartSelector = (state) => state.cart.list
export const getIsCartLoading = (state) => state.cart.isLoading

export const { setCart, setIsCartLoading } = cartSlice.actions
export default cartSlice.reducer