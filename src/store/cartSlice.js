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

export const getIsCardInCart = (id) => (state) => state.cart.list.some(product => product.id === id)

export const getProductAmount = (id) => (state) => state.cart.list.find(product =>  product.id === id).amount

export const getTotalProductsAmount = (state) => state.cart.list.reduce((total, product) => total + product.amount, 0)

export const getTotalPrice = (state) => {
  return state.cart.list
    .reduce((total, item) => total + item.amount * item.price, 0)
    .toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
}

export const { setCart, setIsCartLoading } = cartSlice.actions
export default cartSlice.reducer