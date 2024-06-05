import mongoose  from "mongoose"

const DbConfig = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("MongoDB connected!")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    // Terminate the application if unable to connect to MongoDB
    process.exit(1)
  }
}

export default DbConfig