import mongoose, { ConnectOptions } from "mongoose"
import chalk from "chalk"

const MongoConfig = () => {
  const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

  mongoose.connect(process.env.MONGO_URI, mongoOptions as ConnectOptions)

  const connection = mongoose.connection

  connection.once("open", () =>
    console.log(chalk.green.bold("Database is Connected"))
  )
}

export default MongoConfig
