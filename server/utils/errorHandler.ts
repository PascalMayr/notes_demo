import { Prisma } from "@prisma/client"
import chalk from "chalk"
import { Response } from "express";

/*
* Catch all errors and log
* @param {Error} error
* @param {Response} response
* @returns {void}
*/
class ErrorHandler {
  /*
  * Check if error is trusted
  * @param {Error} error
  * @returns {boolean}
  */
  private isTrustedError(error: Error): boolean {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return true
    }
    return false
   }

  /*
  * Handle trusted errors
  * @param {Error} error
  * @param {Response} response
  * @returns {void}
  */
  private handleTrustedError(error: Error, response: Response): void {
    response.status(400).json({ error: error.message })
  }

  /*
  * Handle critical errors
  * @param {Error} error
  * @param {Response} response
  * @returns {void}
  */
  private handleCriticalError(error: Error, response: Response): void {
    console.error(chalk.red(error))
    response.status(500).json({ error: 'Internal Server Error' })
  }

  /*
  * Handle errors
  * @param {Error} error
  * @param {Response} response
  * @returns {void}
  */
  public handleError(error: Error, response?: Response): void {
    if (this.isTrustedError(error) && response) {
      this.handleTrustedError(error, response);
    }
    if (!this.isTrustedError(error) && response) {
      this.handleCriticalError(error, response);
    }
  }
}

const errorHandler = new ErrorHandler()

export default errorHandler
