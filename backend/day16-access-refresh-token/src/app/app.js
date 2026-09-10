import express from "express";
import authRoutes from "../routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// prefix - "/api/auth" is used to define the base URL for all authentication-related routes.
app.use("/api/auth", authRoutes);

export default app;
