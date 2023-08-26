import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import notesRouter from './routes/api/v1/note/index.js'

const app = express()
const port = process.env.port || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.listen(port, () => {
  console.log(chalk.green(`Server listening at http://localhost:${port}`));
})
