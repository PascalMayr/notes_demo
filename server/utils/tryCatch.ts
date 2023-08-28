import { NextFunction, Request, Response } from "express"

/**
 * try catch wrapper
 *
 * @param controller
 * @returns
 */
const tryCatch = (controller: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res, next)
  } catch(error: any) {
    return next(error)
  }
}

export default tryCatch
