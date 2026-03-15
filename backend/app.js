import express from "express";
import product from "./routes/productRoutes.js";
import user from "./routes/userRoutes.js";
import order from "./routes/orderRoutes.js";
import payment from "./routes/paymentRoutes.js";
import errorHandleMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://coza-store-plum.vercel.app"
];
// app.use(
//   cors({
//     origin: ["http://localhost:5173", process.env.CORS_ORIGIN],
//     credentials: true,
//   }),
// );

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
);

// Route
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Server static files
// app.use(express.static(path.join(__dirname, '../frontend/dist')))
// app.get("/*", (_,res)=> {
//   res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'))
// })

app.use(errorHandleMiddleware);

export default app;
