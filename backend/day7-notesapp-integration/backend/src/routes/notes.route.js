const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updatedNotesController,
  deleteNoteController,
  singleEntityUpdateController,
} = require("../controllers/notes.controller");

const router = express.Router();

// CREATE. 

// router.get() - it work but Misusing verbs leads to confusion, poor readability, and violates HTTP standards.

// router.get("/create", createNotesController);
router.post("/create", createNotesController);

// READ
// - "/allNotes" -> this is endpoints 
router.get("/allNotes", getAllNotesController);

// READ ONE
router.get("/:id", getSingleNoteController);

// UPDATE VIA PUT
router.put("/:id", updatedNotesController);

//  UPDATE VIA PATCH ~ for singel entity / partial fields
router.patch("/:id/single", singleEntityUpdateController);

// DELETE
router.delete("/:id", deleteNoteController);

module.exports = router;
