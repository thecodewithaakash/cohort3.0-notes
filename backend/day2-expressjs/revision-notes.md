### understanding instance

- when you use the `new` keyword in JavaScript, you’re creating an **instance** of a constructor function or class.

```js
// "new" keyword → creates an instance
function Car(model) {
  this.model = model;
}

const car1 = new Car("Tesla"); // instance of Car
const car2 = new Car("BMW"); // another instance

// Each instance has its own data but shares the prototype methods.
```

- `new` → creates a new object.
- That object is an **instance** of the constructor/class.
- Each instance has its own state but inherits behavior from the prototype.

```js
// Constructor Function
// - A normal function used with "new".
// - Purpose: initialize properties when creating an instance.
function Car(model) {
  this.model = model;
  this.drive = function () {
    console.log(`${this.model} is driving`);
  };
}
const car1 = new Car("Tesla"); // instance created via constructor function
car1.drive(); // Tesla is driving

// Constructor in Class
// - Special method named "constructor" inside a class.
// - Runs automatically when "new" is called.
// - Purpose: set up object state.
class Car {
  constructor(model) {
    // 👈 constructor method
    this.model = model; // sets up properties when instance is created
  }
  drive() {
    console.log(`${this.model} is driving`);
  }
}
const car2 = new Car("BMW"); // instance created via class constructor
```

- **Constructor function/class constructor** = initializer blueprint.
- **`new` keyword** calls the constructor → creates an **instance** with its own data.
- **Instance** = actual object built from the blueprint.

```js
// In JavaScript, "this" is determined by the call site,
// not by where the function is defined.
```

- **Call site** = the place in code where the function is _invoked_.
- That’s what decides the value of `this`.
- Arrow functions are the exception → they capture `this` from their definition scope (lexical binding).

- _`this` depends on how/where the function is called (call site), not on where it was written._

- protcol is a set of rules that defines how our data is transmitted and communicated between systems over a network like HTTP,FTP etc.

- HTTP stands for hyperText transfer protocol is the stateless client-server protocol which is used to communication like exchange resources between browser & server. it were only for HyperText only but now it supports web data(now carries images,videos,json data,API's & more).

### understanding data communication with JSON

1. Understand the Problem

- By default, Node.js receives raw request body as a string or buffer.
- When client sends JSON (e.g., {"name":"Aakash"}), it arrives as a string/buffer - chunk.
- Without parsing, req.body is undefined or just raw text(chunk data).
- You cannot directly access properties like req.body.name - due to string/buffer data.


## 1️⃣ Node.js (raw HTTP server)
By default, Node’s `http` module gives you raw request data as chunks. You must manually collect and parse it.  

```js
// Node.js raw server
const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";

  req.on("data", chunk => {
    body += chunk; // collect raw string
  });

  req.on("end", () => {
    console.log("Raw data:", body); // '{"name":"Aakash","age":22}'
    const parsed = JSON.parse(body); // convert to JS object
    console.log("Parsed object:", parsed); // { name: 'Aakash', age: 22 }

    res.end("Data received");
  });
});

server.listen(3000, () => console.log("Node server running..."));
```

## 2️⃣ Express.js without `express.json()`
Express is built on Node, so if you don’t add `express.json()`, you still only get raw chunks.  

```js
const express = require("express");
const app = express();

app.post("/raw", (req, res) => {
  let data = "";
  req.on("data", chunk => {
    data += chunk;
  });
  req.on("end", () => {
    console.log("Raw data:", data); // '{"name":"Aakash","age":22}'
    res.send("Got raw string data");
  });
});

app.listen(3000, () => console.log("Express server running..."));
```

👉 Same as Node — you see **stringified JSON**, not an object.

## 3️⃣ Express.js with `express.json()`
Now add the middleware. Express will automatically parse JSON payloads into JS objects.  

```js
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.post("/parsed", (req, res) => {
  console.log("Parsed object:", req.body); // { name: 'Aakash', age: 22 }
  res.send("Got parsed JSON object");
});

app.listen(3000, () => console.log("Express server running..."));
```

👉 With `express.json()`, you don’t need to manually collect chunks or call `JSON.parse()`.

## 📝 Final Notes
- **Node.js raw** → manual chunk handling + `JSON.parse()`.  
- **Express without middleware** → behaves like Node, raw string only.  
- **Express with `express.json()`** → auto‑parses JSON → `req.body` is ready as JS object.  

- *`express.json()` is middleware that saves you from manual chunk handling and parsing, making JSON request bodies directly available as JS objects in `req.body`.*  

