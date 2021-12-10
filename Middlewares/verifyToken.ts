import { NextFunction, Request, Response } from "express"

import jwt from "jsonwebtoken"

interface Req extends Request {
  id: string
}

type controller = (req: Req, res: Response, next?: NextFunction) => {}

export const verifyToken: controller = async (req, res, next) => {
  const token = req.cookies["jwt"]
  if (!token) return res.clearCookie("jwt").sendStatus(400)

  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET) as {
    id: string
  }

  if (verifiedToken) {
    req.id = verifiedToken.id
    return next()
  } else return res.clearCookie("jwt").sendStatus(400)
}
