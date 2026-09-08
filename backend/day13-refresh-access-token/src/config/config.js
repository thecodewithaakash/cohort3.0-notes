import dotenv from "dotenv";
dotenv.config();

// config based file configuration
const _config = {
  MONGO_URI: process.env.MONGO_URI,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};

// Freeze the config object to prevent modifications because object are mutable...
const config = Object.freeze(_config);
export default config;
