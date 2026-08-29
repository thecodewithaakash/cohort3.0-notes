const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

// CORS: Cross Origin Resource Sharing
// Cause: Browser enforces Same‑Origin Policy.
// Fix: Backend sends headers like Access-Control-Allow-Origin.
// Without server permission, frontend requests get blocked.

// In CORS, the backend must explicitly permit the frontend’s origin via response headers so the browser allows access to its APIs.
// app.use(cors("*")) // It means the backend is allowing requests from any origin (*) — i.e., all frontends can access the API, which is fine for testing but insecure for production.

app.use(
  cors({
    origin: "http://localhost:5173",
  }),

  // Browser don't allow different origins to communicate without permission. ~ CORS policy
);

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok got it");
});

app.use("/notes", notesRoute);

module.exports = app;
