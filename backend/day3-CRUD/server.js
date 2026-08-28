const express = require("express");

const app = express();

// middleware for accepting json data
app.use(express.json()); // parses incoming JSON strings into JS objects
let port = 3000;

let users = [];

// create - POST
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  // console.log(users);
  
  res.send("user saved successfully");
});

// Read - GET
app.get("/", (req, res) => {
  res.send(users);
});

// update - PUT/PATCH
app.put("/update/:id", (req, res) => {
  // const data = req.params; // i get a object --> { id: '1' }
  // console.log(data);
  
  let { id } = req.params;
  // let body = req.body
  let { name } = req.body;
  // console.log(id);
  

  let updatedUser = users.map((val) =>
    // val.id === Number(id) ? { ...val, body } : val
      // val.id === Number(id) ? { ...val, ...body } : val
    val.id === Number(id) ? { ...val, name } : val
  );

  res.send(updatedUser);
});

// delete - DELETE
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((val) => val.id !== Number(id));
  console.log(userData);
  users = userData;
  res.send(userData);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
