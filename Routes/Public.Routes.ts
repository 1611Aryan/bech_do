import { Router } from "express"
import { login, signup } from "../Controllers/Public.Controller"

const PublicRouter = Router()

PublicRouter.post("/signup", signup)

PublicRouter.post("/", login)

export default PublicRouter
