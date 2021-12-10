import { Router } from "express"
import {
  createPost,
  getPosts,
  getProfile,
  searchByTag,
} from "../Controllers/Private.Controller"
import multer from "multer"
const upload = multer({ dest: "uploads/" })

const PrivateRouter = Router()

PrivateRouter.get("/", getProfile)

PrivateRouter.get("/posts", getPosts)

PrivateRouter.get("/posts/:tag", searchByTag)

PrivateRouter.post("/create", upload.single("photos"), createPost)

export default PrivateRouter
