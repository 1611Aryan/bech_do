import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type postData = {
  itemName: string
  date: string
  description: string
  images: string[]
  createdAt?: string
  userPhone: string
}

const initialState = [
  {
    itemName: "White Mattress",
    date: "4th Dec, 2021",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium        reprehenderit similique animi nulla deleniti magnam blanditiis porro        beatae quibusdam maxime?",
    images: [
      "https://images.unsplash.com/photo-1583535045024-e2479a694777",
      "https://images.unsplash.com/photo-1506720186575-11354d325017",
      "https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      "https://images.unsplash.com/photo-1425219366480-47fdbbe0e83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ],

    userPhone: "8146740057",
  },
]

export const postSlice = createSlice({
  name: "post",
  initialState: { posts: initialState },
  reducers: {
    addPosts: (state, payload: PayloadAction<postData[]>) => {
      state.posts = [initialState[0], ...payload.payload]
    },
  },
})

export const { addPosts } = postSlice.actions

const postReducer = postSlice.reducer

export default postReducer
