import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization; // without --> "Bearer "
  // const token = req.headers.authorization.split(" ")[1]; // with --> "Bearer "

  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  // const data = jwt.decode(token)
  // console.log(data);

  const data = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(data.id);
  req.user = user; // creating a new property "user" in the request object, which will be available in the next middleware or route handler

  // this "next()" function is used to pass the control to the next middleware function in the stack.
  // If we don't call "next()", the request will be left hanging and the client will not receive a response.
  next();
};
