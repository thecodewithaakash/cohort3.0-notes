# Node.js Backend Interview Questions

This list is prioritized from the backend topics in this folder. Prepare **Priority 1** first; these are the questions most often repeated in junior Node.js and Express interviews.

## Most Repeated and Most Asked

These are the highest-yield questions. Be able to explain each one clearly and write a small example without help.

1. What is Node.js, and why is it useful for backend development?
2. Is Node.js single-threaded? How does the event loop handle many requests?
3. What is synchronous versus asynchronous code?
4. What is middleware, and how does `next()` work?
5. What does `express.json()` do?
6. What is the difference between `req.params`, `req.query`, and `req.body`?
7. Explain REST and map CRUD operations to HTTP methods.
8. What is the difference between `PUT` and `PATCH`?
9. Which HTTP status codes should a CRUD API return?
10. How do you validate request data and handle errors?
11. How do you connect Express to MongoDB using Mongoose?
12. What are a Mongoose schema and model?

**Interview priority:** event loop -> middleware -> request data -> CRUD/status codes -> validation/errors -> MongoDB/Mongoose.

## Priority 1: Must Prepare

### Node.js and HTTP

1. **What is Node.js, and why is it useful for backend development?**  
   Node.js runs JavaScript outside the browser using the V8 engine. Its event-driven, non-blocking I/O model is effective for APIs and I/O-heavy applications.

2. **Is Node.js single-threaded? How can it handle many requests?**  
   JavaScript runs mainly on one event-loop thread, while Node delegates some I/O work to the OS/libuv thread pool. The event loop handles callbacks when work completes.

3. **What is the event loop? What is the difference between synchronous and asynchronous code?**  
   Synchronous code blocks the current execution path. Asynchronous code starts work and allows other work to continue before a callback, promise, or `await` resumes execution.

4. **How do you create a basic HTTP server without Express?**  
   Use `http.createServer((req, res) => { ... })`, write the status/headers, finish with `res.end()`, and start it with `server.listen(port)`.

5. **What happens if `res.end()` is not called?**  
   The response remains open, so the client can keep waiting until a timeout. Every request path must send or end a response.

### Express

6. **Why use Express instead of Node's `http` module directly?**  
   Express provides routing, middleware, request parsing, response helpers, and a simpler structure. Node's `http` module is lower-level and requires more manual handling.

7. **What is middleware? Explain `next()`.**  
   Middleware is a function that can inspect or change `req`/`res`, finish the response, or call `next()` to continue to the next middleware or route. Forgetting both can hang a request.

8. **What does `app.use(express.json())` do?**  
   It parses incoming JSON request bodies and makes the resulting JavaScript value available at `req.body`. Without it, JSON input may be `undefined`.

9. **What is the difference between `req.params`, `req.query`, and `req.body`?**  
   `req.params` contains route values such as `/notes/:id`; `req.query` contains URL filters such as `?page=2`; `req.body` contains submitted data, commonly JSON.

10. **What is the difference between `app.use()` and `app.get()`/`app.post()`?**  
    `app.use()` registers middleware, usually for multiple methods or a path prefix. `app.get()` and similar methods register handlers for one HTTP method.

### REST and CRUD

11. **Map CRUD operations to HTTP methods.**  
    Create = `POST`, read = `GET`, full replacement = `PUT`, partial update = `PATCH`, and delete = `DELETE`.

12. **What is the difference between `PUT` and `PATCH`?**  
    `PUT` usually replaces the complete resource and is intended to be idempotent. `PATCH` changes only selected fields.

13. **What status codes should a CRUD API return?**  
    `200` for a successful response, `201` after creation, `204` for success without a response body, `400` for invalid input, `404` when a resource is absent, and `500` for an unexpected server failure.

14. **How would you design a notes API?**  
    `POST /notes`, `GET /notes`, `GET /notes/:id`, `PATCH /notes/:id`, and `DELETE /notes/:id`. Return consistent JSON and appropriate status codes.

15. **How do you validate a request before saving it?**  
    Validate required fields, types, lengths, formats, and allowed values at the API boundary. Keep database/schema validation as a second protection, not the only validation.

16. **Why should you check whether an update or delete actually found a document?**  
    A query can execute successfully while matching nothing. Return `404` rather than reporting a misleading successful update or deletion.

17. **What is wrong with storing users in an in-memory array?**  
    Data disappears on restart, is not shared across multiple server instances, and cannot reliably support real traffic. Persistent storage is required for production data.

## Priority 2: Practical Questions

18. **A route parameter is always a string. How do you compare it with a numeric ID?**  
    Convert and validate it first, for example `const id = Number(req.params.id)`. Avoid silently treating `"1"` and `1` as equivalent without a deliberate conversion.

19. **How do you handle errors in an async Express route?**  
    Use `try/catch` around awaited work or a shared async-error wrapper, then pass errors to centralized error middleware. Do not leave rejected promises unhandled.

20. **How would you distinguish invalid input, a missing record, and a database failure?**  
    Invalid input returns `400`, no matching record returns `404`, and an unexpected database/application failure returns `500`. Log diagnostic details server-side but return safe messages to clients.

21. **How do you connect an Express application to MongoDB with Mongoose?**  
    Keep connection code in a separate module, call `mongoose.connect()` during startup, handle connection failure, define schemas, create models, and use models in route/service code.

22. **What are a Mongoose schema and model?**  
    A schema defines document shape, types, and validation. A model is the API created from that schema for querying and writing a MongoDB collection.

23. **What do `required`, `minlength`, `new: true`, and `runValidators: true` do in the notes code?**  
    `required` enforces presence, `minlength` enforces a minimum string length, `new: true` returns the updated document, and `runValidators: true` applies schema validation during the update.

24. **Why should database credentials be stored in environment variables?**  
    Credentials must not be committed to source control. Use environment variables or a secret manager, rotate any exposed password, and keep separate credentials per environment.

25. **Should the server start if the database connection fails?**  
    Usually no for an API that depends on the database. Connect first, fail fast with a clear startup error, and only call `listen()` after the required dependencies are ready.

26. **How would you prevent an API from accepting unexpected fields?**  
    Pick allowed fields explicitly, validate the payload, and construct the object to save from those fields. Never blindly persist arbitrary `req.body` data.

27. **How would you implement pagination for `GET /notes`?**  
    Parse bounded `page` and `limit` query values, calculate `skip`, sort consistently, query only the requested records, and return pagination metadata.

28. **How do you avoid exposing sensitive data in responses?**  
    Select only safe fields, remove passwords/tokens, avoid returning raw database errors, and use serialization rules where appropriate.

## Priority 3: Production Basics

29. **What security protections should an Express API have?**  
    HTTPS, authentication and authorization, input validation, rate limiting, secure headers, CORS configured for known origins, safe error responses, and dependency updates.

30. **What is the difference between authentication and authorization?**  
    Authentication answers “Who are you?” Authorization answers “What are you allowed to do?”

31. **What is CORS?**  
    Cross-Origin Resource Sharing controls which browser origins may call an API. It is a browser security policy, not a replacement for authentication.

32. **How would you test an Express API?**  
    Test success and failure cases with a request library such as Supertest, mock or isolate the database, and verify status codes, response bodies, validation, and authorization behavior.

33. **How would you improve a slow endpoint?**  
    Measure first, inspect database query plans, add suitable indexes, return only needed fields, paginate results, avoid unnecessary sequential awaits, and cache carefully where appropriate.

34. **How do you shut down a Node.js server safely?**  
    Handle `SIGTERM`/`SIGINT`, stop accepting new requests, allow active requests to finish within a deadline, close database connections, and then exit.

## Practical Coding Tasks to Rehearse

- Build a notes CRUD API with `POST`, `GET`, `GET by id`, `PATCH`, and `DELETE`.
- Add validation for a required title and a description with at least 10 characters.
- Return `201`, `400`, `404`, and `500` correctly in separate cases.
- Add centralized error-handling middleware for async route failures.
- Replace hard-coded MongoDB credentials with `process.env.MONGODB_URI`.
- Add pagination and a title search to `GET /notes`.
- Write tests for create, missing record, invalid body, and database failure scenarios.

## Topics to Learn Next

Authentication with JWT or sessions, password hashing, centralized configuration, logging, automated tests, indexes, transactions, Docker/deployment, and API documentation with OpenAPI.