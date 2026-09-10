import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateTokens = ({ userId }) => {
  // Use two unique JWT secrets — one for access tokens and another for refresh tokens — to isolate and secure each token type.
  const accessToken = jwt.sign({ id: userId }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userId }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export function verifyAccessToken(token) {
  const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
  // jwt.verify() → verifies token authenticity & integrity using ACCESS_TOKEN_SECRET
  // Checks signature + expiration → ensures token is valid & untampered

  return decoded;
}

export function verifyRefreshToken(token) {
  const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);
  return decoded;
}
