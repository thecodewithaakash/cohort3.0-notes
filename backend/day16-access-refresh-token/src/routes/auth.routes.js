import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

const router = Router();

/**
 * @POST /api/auth/register
 */

// router.post("/register") -> route
// async (req, res) => {} -> route handler/Controller

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists",
      errors: [
        {
          path: "email", // we can use ->  field or path for which the error is related to
          message: "User already exists",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  const { accessToken, refreshToken } = generateTokens({ userId: user._id });

  // saving the refresh token in the database for the user, so that it can be used later for refreshing the access token.
  user.refreshToken = refreshToken; // object property is used to store the refresh token in the user document in the database.
  await user.save(); // saving the updated user document with the refresh token in the database.

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, // means the cookie cannot be accessed via JavaScript, providing protection against XSS attacks.
    // only server can access the cookie, and it will be sent automatically with every request to the server.
    // client cannot access the cookie via JavaScript, providing an additional layer of security against cross-site scripting (XSS) attacks.

    // without "httpOnly", the cookie can be accessed via JavaScript,
    // which can be a security risk if an attacker manages to inject malicious scripts into the application.
  });

  res.status(201).json({
    message: "user registered successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    accessToken,
  });
});

/**
 * @GET /api/auth/me
 */
router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized, access token not found",
    });
  }

  try {
    const decoded = verifyAccessToken(accessToken);

    const user = await userModel.findById(decoded.id);

    res.status(200).json({
      message: "user fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired access token",
    });
  }
});


/**
 * @POST /api/auth/refresh
 */
router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);

    const user = await userModel.findById(decoded.id);

    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null; // removing the refresh token from the user document in the database to prevent further use of the invalid token.
      await user.save();

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id,
    });

    // setting the new refresh token in the cookie with httpOnly flag for security
    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

    // updating the user's refresh token in the database with the new refresh token
    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      message: "Tokens refreshed successfully",
      accessToken,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    });
  }
});

export default router;
