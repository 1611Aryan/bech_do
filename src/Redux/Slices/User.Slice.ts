import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type profile = { name: string; email: string; phone: string }

const initialState = {
  name: "",
  email: "",
  phone: "",
}

export const userSlice = createSlice({
  name: "authentication",
  initialState: { profile: initialState },
  reducers: {
    getProfile: (state, payload: PayloadAction<profile>) => {
      state.profile = payload.payload
    },
    deleteProfile: state => {
      state.profile = initialState
    },
  },
})

export const { getProfile, deleteProfile } = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer
