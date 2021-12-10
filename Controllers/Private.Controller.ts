import Post, { PostI } from "../Models/Post.Model"
import User from "../Models/User.Model"
import { controller } from "./controller"
import { imageKit } from "../server"

import path from "path"
import fs from "fs/promises"

const uploadImages = async (
  file: { filename: string },
  id: string
): Promise<string> => {
  try {
    const imagePath = path.join(__dirname, "..", "uploads", file.filename)
    const response = await imageKit.upload({
      file: await fs.readFile(imagePath),
      fileName: id.toString(),
      folder: "Bech-do",
    })

    return response.url
  } catch (err) {
    throw new Error(err)
  }
}

export const getProfile: controller = async (req, res) => {
  const id = req.id
  try {
    const user = await User.findById(id, {
      name: 1,
      email: 1,
      phone: 1,
    }).lean()
    if (!user)
      return res
        .clearCookie("jwt")
        .status(404)
        .send({ message: "Incorrect Credentials" })

    const profile = {
      name: user.name,
      email: user.email,
      phone: user.phone,
    }

    return res.status(200).send({ payload: profile })
  } catch (err) {
    console.log({ getProfile: err })
    return res.status(500).send(err)
  }
}

export const getPosts: controller = async (req, res) => {
  try {
    const posts = await Post.find({}).lean()

    return res.status(200).send({ payload: posts })
  } catch (err) {
    console.log({ getPosts: err })
    return res.status(500).send(err)
  }
}

export const createPost: controller = async (req, res) => {
  const id = req.id
  const { itemName, description, phone } = req.body
  const tags: string = req.body.tags
  const arrayTags = tags.split(",")
  const file = req.file
  console.log({ file, body: req.body })

  try {
    const image = await uploadImages(file, id)

    const post = await Post.create({
      itemName,
      description,
      tags: arrayTags,
      images: [image],
      userId: id,
      userPhone: phone,
    })

    await User.findByIdAndUpdate(id, {
      $push: { created: post._id },
    })

    return res.status(200).send({ message: "Posting Created" })
  } catch (err) {
    console.log({ createPost: err })
    return res.status(500).send(err)
  }
}

export const searchByTag: controller = async (req, res) => {
  const tag = req.params["tag"]

  try {
    const posts = await Post.find({ tags: tag }).lean()

    return res.status(200).send({ payload: posts })
  } catch (err) {
    console.log({ searchByTag: err })
    return res.status(500).send(err)
  }
}
