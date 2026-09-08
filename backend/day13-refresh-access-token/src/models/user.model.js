import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // name:String,
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // basic email regex
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
