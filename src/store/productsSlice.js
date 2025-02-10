import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  total: 0,
  isLoading: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.list = action.payload
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload
    },

    setTotalProducts(state, action) {
      state.total = action.payload
    }
  }
})

export const getProducts = (state) => state.products.list
export const getTotalProducts = (state) => state.products.total
export const getIsLoading = (state) => state.products.isLoading

export const { setProducts, setIsLoading, setTotalProducts } = productsSlice.actions
export default productsSlice.reducer