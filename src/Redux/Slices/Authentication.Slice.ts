import { createSlice } from "@reduxjs/toolkit"

const PREFIXED_KEY = "BECHDO"

const toBool = (str: string | null) => str === "true"

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: toBool(localStorage.getItem(PREFIXED_KEY)) || false,
  },
  reducers: {
    login: state => {
      state.loggedIn = true
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(true))
    },

    logout: state => {
      state.loggedIn = false
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(false))
    },
  },
})

export const { login, logout } = authenticationSlice.actions

const authenticationReducer = authenticationSlice.reducer

export default authenticationReducer
