import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database has connected successfully");
  } catch (error) {
    console.log("Failed to connect the database");
  }
};

export default dbConnect;
