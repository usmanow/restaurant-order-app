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

    setIsProductsLoading(state, action) {
      state.isLoading = action.payload
    },

    setTotalProducts(state, action) {
      state.total = action.payload
    }
  }
})

export const getProductsSelector = (state) => state.products.list
export const getTotalProducts = (state) => state.products.total
export const getIsProductsLoading = (state) => state.products.isLoading

export const { setProducts, setIsProductsLoading, setTotalProducts } = productsSlice.actions
export default productsSlice.reducer