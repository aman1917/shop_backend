import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";
dotenv.config();

const connectDB = async () => {
  try {
    // Log the MongoDB URI to verify it's correct
    // Create the MongoDB connection
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // Success message
    console.log("Connected to MongoDB");

  } catch (error) {
    // Error message if connection fails
    console.log("MongoDB connection error:", error);
  }
};

export default connectDB;
