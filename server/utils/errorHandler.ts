import { Prisma } from "@prisma/client"
import chalk from "chalk"
import { Request, Response } from "express";

/*
* Catch all errors and log
*/
function errorHandler(error: any, res: Response, req: Request) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.log(chalk.blue('Database error'));
  }
  console.log(error.message)
  // internal server error
  res.status(500)
  res.send({ error: error.message })
}

export default errorHandler
