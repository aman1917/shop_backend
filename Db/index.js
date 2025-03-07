import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://guptaaman1917:Geeta1917@cluster0.0qh2v.mongodb.net/ShopManagement"
      //   `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Mongoose is connected");
  } catch (error) {
    console.log("mongoDB connection error :" + error);
  }
};

export default connectDB;
