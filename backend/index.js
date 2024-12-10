import express from "express";
import connectDb from "./ultils/ConnectMongo.js";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import cookieParser from "cookie-parser";
import productRoute from "./Routes/productRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
// middlewares
// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8000;

// APIs

app.use("/api", userRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running at port http://localhost:${PORT}`);
});
