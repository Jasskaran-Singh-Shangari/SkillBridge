import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
}

export default connectDB