
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
13. HTTP vs HTTPs? 


1. What is Node.js, and why is it useful for backend development?
 **Node.js is a JavaScript runtime environment that allows us to run JavaScript outside the browser, mainly for building fast and scalable backend applications.**

### Core Features

 - **Runtime:** Executes JavaScript on the server using Node.js.
- **V8 Engine:** Uses Google Chrome’s **V8 JavaScript engine** to compile and execute JavaScript efficiently.
- **Event-driven:** Uses an event-based architecture, which is well suited for handling many concurrent requests.
- **Non-blocking I/O:** I/O operations like database queries and file/network requests are asynchronous, so the server can continue processing other requests.

 ### Why Node.js is Useful for Backend

 1. **Unified language:** We can use JavaScript for both frontend and backend.
2. **Scalability:** Its non-blocking, event-driven model handles many simultaneous connections efficiently.
3. **npm ecosystem:** Provides a huge collection of reusable packages and tools.
4. **Real-time applications:** Excellent for chat apps, notifications, gaming, and live collaboration.
5. **Performance:** V8 and asynchronous I/O make it efficient for I/O-heavy applications.

 **One-liner:** _“Node.js is a fast, event-driven JavaScript runtime that uses non-blocking I/O to build efficient, scalable, and real-time backend applications.”_