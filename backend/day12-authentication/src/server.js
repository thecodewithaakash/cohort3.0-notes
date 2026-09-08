import app from "./app/app.js";
import { connectDB } from "./config/db.js";

// we use "await" here because we want to make sure that the database connection is established before starting the server.
// jab tak database connect nahi hota, server start nahi hoga
// "await" is only valid if "ESM" is used, so we need to use "type": "module" in package.json
// await connectDB();

// otherwise, use async with await inside a function, and call that function here, like this:

// (async () => {
//   await connectDB();
// })();

// or

// async function startServer() {
//     await connectDB();
//     app.listen(3000, () => {
//         console.log("Server is running on port 3000");
//     })
// }
// startServer();

await connectDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
