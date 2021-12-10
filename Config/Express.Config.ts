import Express, { Application } from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"

const ExpressConfig = (app: Application) => {
  app.use(Express.json({ limit: "50mb" }))
  app.use(Express.urlencoded({ limit: "50mb" }))
  app.use(
    cors({
      origin:
        process.env.NODE_ENV !== "production"
          ? "http://localhost:3000"
          : "https://bech-do.netlify.app",
      credentials: true,
    })
  )
  app.use(helmet())
  app.use(morgan("dev"))
  app.use(cookieParser())
}

export default ExpressConfig
