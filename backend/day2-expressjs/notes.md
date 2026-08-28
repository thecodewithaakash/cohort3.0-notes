### Agenda: Understanding basics

1. Understanding ExpressJs
2. Why we use express instead of http server
3. Understand what are the apis.\
4. Rest Apis - GET, POST, PUT/PATCH, DELETE
5. Create our first api

### installation setup

- npm init -y
- npx nodemon : it checks "package.json" file --> runs this file --> "main": "server.js",
- npx nodemon filename --> npx nodemon server.js
- npm i express

- Backend: it handles all the operations(Behind the scene).

# 🧩 Instance in Node.js
- **Instance** → A concrete object created from a class or function.
- **In `const app = express()`** → `express()` returns an **instance of an Express application**.
- **Usage** → That `app` object is your server app; you use it to define routes, middleware, and start listening on a port.

👉 One‑liner: _`const app = express()` creates an instance of the Express application, which you use to configure and run your server._

### protocols

- 👉 A protocol is simply a set of rules and standards that define how data is transmitted and communicated between systems over a network.

- HTTP(HyperText Transfer Protocol): HTTP (HyperText Transfer Protocol) is the stateless client‑server protocol that defines how browsers and servers exchange resources — originally hypertext, now all kinds of web data(now carries images, JSON, videos, APIs, and more).

- important protocols:
  - http:(req,res) - hyperText transfer protocol --> without security
  - https:(req,res) - hyperText transfer protocols --> with security
  - FTP:(req,file,cb(callback)) - File Transfer Protocol
  - SMTP - Simple Mail transfer protocol
  - web socket: two way communcation(full duplex communication) --> chats(socket.io),video calls(web RTC),voice calls.

- Traditional client‑server HTTP is one‑way (client requests, server responds), while WebSockets enable full two‑way, real‑time communication between client and server.


### Methods
- Rest API: Representational State Transfer
    - GET: retrieve Data
    - POST: create and save something
    - PUT/PATCH: update something
    - DELETE: delete anything

- ExpressJs is a framework for NodeJs.
  - he didn't knows how to catch text data in "req".
  - so we will use --> "express.json()".

- req(request contains these things):
  - body -> (Frontend se bheja hua data.)
  - query -> search(extra data in path)
  - params -> Dynamic URL
  - file / files -> FTP

```js
// 📌 Topic: req.body undefined & JSON stringify/parse

// ❓ Why
// - By default, Express does not parse incoming JSON.
// - Without middleware, req.body stays undefined.
// - JSON data needs parsing to be usable in JS.

// ⚙️ How
// - Use express.json() middleware to parse JSON bodies.
// - For form data, use express.urlencoded({ extended: true }).
// - stringify → convert JS object to JSON string (sending).
// - parse → convert JSON string to JS object (receiving).

// 🧩 What (Code Example)
const express = require('express');
const app = express();

// Middleware for accepting body
app.use(express.json()); // parses JSON
app.use(express.urlencoded({ extended: true })); // parses form data

app.post('/create', (req, res) => {
  console.log(req.body); // now prints parsed object
  res.send("ok post");
});

// req.body undefined → missing parser middleware.
// stringify when sending, parse when receiving.
```

- res(response): send the output/message.
- req(request):
  - it accepts frontend data
    - body -> formdata
    - query --> ex: pagination(?limit=100&skip=0)
    - params --> dynamic url(/product/:id)
    - files: we use multer