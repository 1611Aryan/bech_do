import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

import User, { UserI } from "../Models/User.Model"
import { controller } from "./controller"

export const signup: controller = async (req, res) => {
  const { name, email, phone, password }: UserI = req.body

  if (!name || !email || !phone || !password)
    return res.status(400).send({ message: "Incomplete Data" })

  try {
    const user = await User.findOne({ $or: [{ email }, { phone }] }).lean()
    if (user)
      return res.status(403).send({ message: "Email/ Phone already in use." })

    await User.create({
      name,
      email,
      phone,
      password,
    })
    return res.status(201).send({ message: "Account Created" })
  } catch (err) {
    console.log({ signup: err })
    return res.status(500).send(err)
  }
}

export const login: controller = async (req, res) => {
  const { email, password }: UserI = req.body
  if (!email || !password)
    return res.status(400).send({ message: "Incomplete Data" })

  const failMessage = "Incorrect Email/ Password."

  try {
    const user = await User.findOne({ email }).lean()
    if (!user) return res.status(404).send({ message: failMessage })

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(404).send({ message: failMessage })

    const payload = {
      id: user._id,
    }

    const token = JWT.sign(payload, process.env.JWT_SECRET)

    return res
      .cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 5,
        secure: true,
        httpOnly: true,
        sameSite: "none",
      })
      .status(200)
      .send({ message: "Login Successfull" })
  } catch (err) {
    console.log({ signup: err })
    return res.status(500).send(err)
  }
}
