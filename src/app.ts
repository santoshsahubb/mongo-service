import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import statusRoutes from "./routes/status.routes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/status", statusRoutes);

export default app;
