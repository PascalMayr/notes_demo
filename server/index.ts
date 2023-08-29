import express, { NextFunction, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpecs from './utils/swagger.js'
import cors from 'cors'
import chalk from 'chalk'
import notesRouter from './routes/api/v1/notes/index.js'
import morgan from 'morgan'
import errorHandler from './utils/errorHandler.js'

const app = express()
const port = process.env.port || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'));
// API docs
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: false })
)
// Note API routes
app.use('/api/v1/notes', notesRouter)
// Add error handler
app.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(error, res);
});

app.listen(port, () => {
  console.log(chalk.green(`Server listening at http://localhost:${port}`));
})
