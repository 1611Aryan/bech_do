import express from "express"
import chalk from "chalk"
import ExpressConfig from "./Config/Express.Config"
import MongoConfig from "./Config/Mongo.Config"
import PublicRouter from "./Routes/Public.Routes"
import PrivateRouter from "./Routes/Private.Routes"
import { verifyToken } from "./Middlewares/verifyToken"
import ImageKitConfig from "./Config/ImageKit.Config"

if (process.env.NODE_ENV !== "production") require("dotenv").config()

const PORT = process.env.PORT || 5000
const app = express()
ExpressConfig(app)
MongoConfig()

export const imageKit = ImageKitConfig()

app.use("/", PublicRouter)
app.use("/protected", verifyToken, PrivateRouter)

app.listen(PORT, () =>
  console.log(chalk.blue.bold(`Server running on Port ${PORT}`))
)
