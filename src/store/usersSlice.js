import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  role: null,
  email: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
      state.role = action.payload.role
      state.email = action.payload.email
    },
    removeUser() {
      return initialState
    }
  }
})

export const getUserInfo = (state) => state.user
export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer