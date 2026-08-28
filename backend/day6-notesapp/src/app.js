const express = require("express");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const createNotesController = require("./controllers/notes.controller");
const notesRoute = require("./routes/notes.route");

const app = express();

connectDB();

app.use(express.json());

// route + controller(function handler)
app.get("/", (req, res) => {
  res.send("ok got it");
});

// route + controller(function handler)
// app.post("/create", createNotesController);

//  app.use → used for -> Registers middleware or routes in the Express app
// "/notes" → Base path prefix for all notesRoute endpoints
app.use("/notes", notesRoute);


module.exports = app;
