import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
import cors from 'cors'
import routes from './routes/index.js'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
    Credential: true,
  })
)
app.use(routes)

app.listen(PORT, () => console.log(`Port on http://localhost: ${PORT}`))
