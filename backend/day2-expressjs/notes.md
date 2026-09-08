### Agenda: Understanding basics

1. Understanding ExpressJs
2. Why we use express instead of http server ?
3. Understand what are the API's
4. Rest Apis - GET, POST, PUT/PATCH, DELETE
5. Create our first api

### installation setup

- npm init -y
- npx nodemon : it checks "package.json" file --> runs this file --> "main": "server.js", --> filename must be "server.js" if runs only this in terminal --> npx nodemon
- npx nodemon filename --> npx nodemon server.js
- npm i express

- Backend: it handles all the operations(Behind the scene).

### 🍴 Restaurant → Software System Analogy

- **Ambience(hotel view), chairs, tables, lights…**  
  → **Frontend (UI)** — what the user sees and interacts with.

- **Menu card → Items**  
  → **Features / Options** — available actions or endpoints the system offers.

- **Call the waiter (takes the order)**  
  → **API** — messenger that carries requests from user to backend.

- **Kitchen (order prepared)**  
  → **Backend (Node.js)** — where the logic runs, requests are processed.

- **Storage inside kitchen (ingredients)**  
  → **Database** — where data is stored and fetched when needed.

- **Waiter comes with your order**  
  → **Response via API** — delivers processed data back to the user.

### 📝 System Analogy

- **Frontend → Ambience**
- **Backend → Kitchen**
- **Database → Storage inside kitchen**
- **API → Waiter**

# 🧩 Instance in Node.js

- when you use the new keyword in JavaScript, you’re creating an instance of a constructor function or class.

- **Instance** → A concrete object created from a class or function.
- **In `const app = express()`** → `express()` returns an **instance of an Express application**.
- **Usage** → That `app` object is your server app; you use it to define routes, middleware, and start listening on a port.

👉 _`const app = express()` creates an instance of the Express application, which you use to configure and run your server._

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

- HTTP is stateless → each request is independent, server doesn’t remember client state.

### Methods

- API (Application Programming Interface) → acts as a bridge between client (frontend/browser) and server (backend) for stateless HTTP communication.
- REST API (Representational State Transfer) → acts as a bridge between client (frontend/browser) and server (backend) for stateless HTTP communication using standard methods (GET, POST, PUT/PATCH, DELETE).

- Rest API: Representational State Transfer
  - GET: retrieve Data
  - POST: create and save something
  - PUT/PATCH: update something
  - DELETE: delete anything

- ExpressJs is a framework for NodeJs.
  - he didn't knows how to catch text data in "req".
  - so we will use --> "express.json()".
  - express.json() → built-in middleware that parses incoming JSON payloads (stringified) into JS objects accessible via req.body.
  - JSON acts as the standard data format for communication between client (frontend/browser) and server (backend) in stateless HTTP requests/responses.

- req(request contains these things):
  - body -> (Frontend se bheja hua data.)
  - query -> search(extra data in path)
  - params -> Dynamic URL
  - file / files -> FTP

```js
// ### Params vs Query
// Params → dynamic values in the URL path
// Example: /users/:id → /users/101
// Accessed via req.params.id
// Used for identifying specific resources.

// Query → key-value pairs after ? in URL
// Example: /users?role=admin&active=true
// Accessed via req.query.role, req.query.active
// Used for filtering, searching, or optional data.
```

```js
// - By default, Express does not parse incoming JSON.
// - Without middleware, req.body stays undefined.
// - JSON data needs parsing to be usable in JS.

// ⚙️ How
// - Use express.json() middleware to parse JSON bodies.
// - For form data, use express.urlencoded({ extended: true }).
// - stringify → convert JS object to JSON string (sending).
// - parse → convert JSON string to JS object (receiving).

// 🧩 What (Code Example)
const express = require("express");
const app = express();

// Middleware for accepting body
app.use(express.json()); // parses JSON
app.use(express.urlencoded({ extended: true })); // parses form data

app.post("/create", (req, res) => {
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

```js
// 🚀 Why Express.js over Node.js
// Node.js → runtime environment (provides core modules like http, fs,os).
// Problem → building APIs with raw Node requires manual handling of routes, requests, responses.

// Express.js → lightweight framework built on Node.
// ✅ Simplifies routing (app.get, app.post).
// ✅ Middleware support (logging, auth, parsing JSON).
// ✅ Faster development (less boilerplate).
// ✅ Large ecosystem (plugins, community).
// ✅ Scalable structure for APIs and web apps.

// *We use Express.js because it abstracts Node’s low-level HTTP handling,
// making API development faster, cleaner, and more maintainable.*
```

```js
// Why stringify & parse JSON?

// Frontend → JS objects can’t be sent directly over HTTP.
// - Must be converted to a text format → JSON.stringify(obj).
// - Sent as string payload in request body.

// Backend → receives raw string.
// - Needs to convert back into JS object → JSON.parse() or express.json() middleware.
// - So server can access data via req.body in usable form.
```

- **Stringify** → serialize JS object → string for transport.
- **Parse** → deserialize string → JS object for use.
- This ensures **stateless communication** between client and server over HTTP.

- express.json() → parses JSON
- express.urlencoded() → parses URL-encoded data
- stringify when sending, parse when receiving.