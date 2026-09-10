import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
  await mongoose.connect(config.MONGO_URI);
  console.log("MongoDB connected");
}

export default connectDB;

// - async is used for asynchronous operations, allowing the function to return a promise and enabling the use of "await" within it.
// - await is used to pause the execution of the function until the promise returned by mongoose.connect() is resolved,
// ensuring that the database connection is established before proceeding.
// - try/catch is used for error handling, allowing the function to catch and handle any errors that may occur during the database connection process.
