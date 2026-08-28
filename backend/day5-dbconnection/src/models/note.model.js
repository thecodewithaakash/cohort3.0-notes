const mongoose = require("mongoose");

/*
-  A schema in Mongoose is simply a blueprint that defines the structure of documents in a MongoDB collection 
     — specifying field names, data types, and validation rules.
*/

// "new" keyword is used to create a new instance/Object of the mongoose.Schema class.
const notesSchema = new mongoose.Schema({
  // title: String,
  // description: String,

  title: { type: String, required: true },
  description: { type: String, minlength: 10 },
});

const NotesModel = mongoose.model("notes", notesSchema);
module.exports = NotesModel;

// flow : Schema -> Model -> collection in database.
// mongoose.model("collectionName", schemaName) -> collectionName is the name of the collection in the database.
