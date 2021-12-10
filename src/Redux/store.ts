import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "./Slices/Authentication.Slice"
import postReducer from "./Slices/Post.Slice"
import userReducer from "./Slices/User.Slice"

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
    posts: postReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
