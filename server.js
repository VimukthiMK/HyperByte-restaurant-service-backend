import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import DbConfig from "./config/db.config.js"

import RestaurantRoute from './routes/restaurant.route.js'

// Create express app
const app = express()

// dotenv config
dotenv.config()

// DB connection
DbConfig()

//initialize the port-Enter a port
const port = process.env.PORT

// Parse JSON bodies
app.use(express.json())

// CORS Origin Middleware
app.use(cors({ origin: process.env.CLIENT_URL}))

// API Routes
app.use("/api/restaurants", RestaurantRoute)

app.listen(port,()=>{
    console.log('Backend is Running on port',port)
})
