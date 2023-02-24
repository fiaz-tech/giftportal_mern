import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: "./config.env" })
import connectDB from './config/db.js'

const app = express()

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config();

connectDB()

app.use(express.json())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)




const PORT = process.env.PORT || 5000
app.listen(5000, console.log(
  `Server running in ${process.env.NODE_ENV} mode from PORT ${PORT}`
  ))