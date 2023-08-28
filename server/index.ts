import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpecs from './utils/swagger.js'
import cors from 'cors'
import chalk from 'chalk'
import notesRouter from './routes/api/v1/note/index.js'
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
  swaggerUi.setup(swaggerSpecs, { explorer: true })
)
// Note API routes
app.use('/api/v1/note', notesRouter)
// Add error handler
app.use(errorHandler)

app.listen(port, () => {
  console.log(chalk.green(`Server listening at http://localhost:${port}`));
})
