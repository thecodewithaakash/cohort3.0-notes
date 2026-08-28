const mongoose = require("mongoose");

// mongoose.Schema is a constructor function used to create a new Schema object.
// A Schema defines the structure of documents in a MongoDB collection.
// It specifies field names, data types, and validation rules/constraints.
// Example: required, unique, minlength, match (regex), etc.

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "Minimum 20 characters are required"],
  },
});

// this "NotesModel" is a model that represents the "notes" collection in the MongoDB database.
//  It provides an interface to interact with the collection, allowing you to perform CRUD operations (Create, Read, Update, Delete)
//  on the documents within that collection.

const NotesModel = mongoose.model("notes", notesSchema);
module.exports = NotesModel;
