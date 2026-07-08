import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Cache the connection across warm serverless invocations (Vercel reuses the
// same lambda container for consecutive requests), and make sure the very
// first request on a cold start actually waits for the connection instead of
// firing queries before Mongoose has connected.
let connectionPromise = null;

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGO_URI)
      .then((conn) => {
        console.log("Database has connected successfully");
        return conn;
      })
      .catch((error) => {
        connectionPromise = null; // allow retry on next request
        console.error("Failed to connect the database:", error.message);
        throw error;
      });
  }

  return connectionPromise;
};

export default dbConnect;
