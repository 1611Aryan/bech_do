import { NextFunction, Request, Response } from "express"

type Req = { id: string; files: any[] } & Request

declare type controller = (req: Req, res: Response, next?: NextFunction) => void
