import app from "./app/app.js";
import connectDB from "./config/db.js";

// "global await" is used to ensure that the database connection is established before starting the server.
await connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
