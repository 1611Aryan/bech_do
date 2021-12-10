import { Schema, model, Document } from "mongoose"
import { UserI } from "./User.Model"

export type PostI = {
  _id: string
  itemName: string
  description: string
  images: string[]
  tags: string[]
  userId: UserI["_id"]
  userPhone: string
}

const PostSchema = new Schema<PostI>(
  {
    itemName: { type: String, required: true },
    description: { type: String, required: true },

    userId: { type: String, required: true },
    userPhone: { type: String, required: true },
    images: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
)

const Post = model<Document & PostI>("Posts", PostSchema)

export default Post
