import { Schema, model, Document } from "mongoose"
import bcrypt from "bcrypt"
import { PostI } from "./Post.Model"

export type UserI = {
  _id: string
  name: string
  email: string
  phone: string
  password: string
  saved: PostI["_id"][]
  created: PostI["_id"][]
}

const UserSchema = new Schema<UserI>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    saved: {
      type: [String],
      default: [],
    },
    created: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
)

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = model<Document & UserI>("Users", UserSchema)

export default User
