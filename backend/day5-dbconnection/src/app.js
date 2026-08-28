const express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();
app.use(express.json());

connectDb();

// checking health status of the server
app.get("/", (req, res) => {
  res.send("ok ");
});

// ### CRUD operation ~ Notes API

// 1. Create
app.post("/notes", async (req, res) => {
  let { title, description } = req.body;

  // returns a promise
  const newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note created successfully",
    data: newNote,
  });
});

// 2. Read all Notes
app.get("/notes", async (req, res) => {
  try {
    const allNotes = await NotesModel.find();

    if (!allNotes || allNotes.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No notes found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Fetched all notes successfully",
      notes: allNotes,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error fetching notes",
      error: error.message,
    });
  }
});

// 4. Update
app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedNote = await NotesModel.findOneAndUpdate(
      { _id: id }, // filter
      { $set: { title, description } }, // update
      { new: true, runValidators: true }, // options
    );

    if (!updatedNote) {
      return res.status(404).send({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Updated note successfully",
      note: updatedNote,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to update note",
      error: error.message,
    });
  }
});

// 4. DELETE /notes/:id
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // returns a promise
    const deletedNote = await NotesModel.findOneAndDelete({ _id: id });

    // 👉 **Why keep the `if (!deletedNote)` check even with try/catch?**
    // - **Try/catch** only handles runtime errors (e.g., DB connection failure, invalid query).
    // - **`!deletedNote`** is not an error — it’s a **valid case** where the query runs fine but no document matches.
    // - Without this check, you’d always return `200 OK` even if nothing was deleted, which is misleading in production.

    if (!deletedNote) {
      return res.status(404).send({
        success: false,
        message: "Note not found",
      });
    }

    res.send({
      success: true,
      message: "Note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error deleting note",
      error: error.message,
    });
  }
});

module.exports = app;
