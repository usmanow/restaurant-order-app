import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  isLoading: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.list = action.payload
    }
  }
})

export default productsSlice.reducer