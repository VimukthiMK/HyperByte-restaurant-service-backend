import express from "express"
import dotenv from "dotenv"
import DbConfig from "./config/db.config.js"


// Create express app
const app = express()

// dotenv config
dotenv.config()

// DB connection
DbConfig()

//initialize the port-Enter a port
const port = process.env.PORT


// API Routes

app.listen(port,()=>{
    console.log('Backend is Running on port',port)
})
