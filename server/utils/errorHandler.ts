import { Prisma } from "@prisma/client"
import chalk from "chalk"

/*
* Catch all errors and log
*/
function errorHandler(error, _req, res, _next) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.log(chalk.blue('Database error'));
  }
  console.log(error.message)
  // internal server error
  res.status(500).send({ error: error.message })
}

export default errorHandler
