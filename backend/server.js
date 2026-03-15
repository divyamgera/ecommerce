import app from "./app.js";
import dotenv from "dotenv";

import { connectMongoDatabase } from "./db.js";

dotenv.config();



import { v2 as cloudinary } from "cloudinary";

import Razorpay from "razorpay";

connectMongoDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Handlw Uncaught exception error

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server is shutting down due to unhandled Exception Errors`);
  process.exit(1);
});

const port = process.env.PORT || 7007;

// Instance for Razorpay

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const server = app.listen(port, () => {
  console.log(`Server is running on PORT ${port} `);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server is shutting down, due to unhandled promise rejection `);
  server.close(() => {
    process.exit(1);
  });
});
