// let http = require("http"); // commonJS version

// let server = http.createServer((req, res) => {
//   // req: taking the requests from client(Frontend) & sending to the backend...
//   // res: sending response from backend to Frontend

//   // console.log("hey..i am server");
//   // console.log(req);
//   // console.log(req.url);

//   if (req.url === "/home") {
//     res.end("calling Home endpoints...");
//     return
//   }

//   if (req.url === "/users") {
//     res.end("calling users endpoints...");
//     return
//   }

//   if (req.url === "/carts") {
//     res.end("calling carts endpoints...");
//     return
//   }

//   res.end("Hello mom!"); // response from backend to frontend...

//   // 👉 If you don’t call res.end(), the connection stays open and the frontend keeps waiting
//   // — it’s not an infinite loop, but a hanging request until timeout or manual close.

//   // 👉 *Timeouts are **built‑in at protocol/client level** (e.g., browsers, HTTP libraries), but in backend code
//   // you usually **implement or configure them explicitly** to avoid hanging requests.*
//   // This makes it clear: **clients have default timeouts**, but **servers should set their own** for reliability.

//   // # ⚙️ Backend vs Server vs CPU/GPU
//   // - **Backend** → The software logic layer (APIs, business rules, DB handling).
//   // - **Server** → A computer/system that hosts backend code and serves clients, often kept online 24/7.
//   // - **CPU/GPU** → Physical processors in the machine; CPU handles general tasks, GPU accelerates parallel/AI workloads.

//   // 👉 One‑liner: *Backend is the code, server is the host machine running it, and CPU/GPU are the processors that power the server.*
// });

// server.listen(3000, () =>
//   console.log("server is listening http://localhost:3000"),
// );

// ### introducing Express.Js
const express = require("express"); // imports the express library to use it...

// initialize
const app = express(); // `express()` returns an **instance of an Express application**.
// console.log(app);

// middleware for accepting data from frontend 
app.use(express.json()); // parses JSON
app.use(express.urlencoded({ extended: true })); // for form-data

// constants
const port = 3000;


app.get("/", (req, res) => {
  // res.end('Hello mom!');
  res.send("Hello mom!");

  // req: receives request data from client (Frontend) → goes to backend
  // res: sends response data from backend → back to client (Frontend)
});

// app.get("/") -> router
// (req, res) => {} -> callback function (handler function)

app.get('/products',(req,res) => {
  res.send([
    {
      id:1,
      name:"Aakash saha",
      role:"AI Fullstack Engineer"
    }
  ])
})

// CRUD
app.post('/create',(req,res) => {
  // create
  console.log(req.body);
  res.send("ok post")
})

app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`),
);
