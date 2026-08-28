## HTTP Status Codes → Frontend ko errors samjhane ke liye

- **200** → Success  
- **201** → Creation  
- **401** → Unauthorized  
- **404** → Not Found  
- **500** → Internal Server Error (Backend + DB)

## Mongoose Communication
- **Backend (Express)** cannot communicate with **DB** directly.  
- **Mongoose** acts as the bridge to help Express talk to the Database.  
- **Communication → via Mongoose**


```markdown
## 📘 Instagram Clone — ER Diagram ~ Schema(collection in MongoDB)

User ───< Post  
User ───< Reel  

+---------+          +---------+          +---------+
|  User   |          |  Post   |          |  Reel   |
+---------+          +---------+          +---------+
| _id     |◄───────┐ | _id     |          | _id     |
| name    |        │ | userId  |─────────►| userId  |
| username|        │ | desc    |          | media   |
| email   |        │ | location|          | desc    |
| mobNo   |        │ | hashtags|          | likes[] |
| bio     |        │ | media   |          | shares  |
+---------+        │ | likes[] |          | comments|
                   │ | comments|          +---------+
                   │ | shares  |
                   │ +---------+
                   │
                   └── One User → Many Posts/Reels
```

- **User Model** → Core identity (name, username, email, mobile, bio).  
- **Post Model** → Feed content (description, location, hashtags, media, likes, shares, comments).  
- **Reel Model** → Short‑form video (media, description, likes, shares, comments).  
- **Relationships** → One user can create many posts and reels (`userId` reference).  
- **Architecture** → Node.js + Express (API), MongoDB + Mongoose (schemas), MVC pattern (models, controllers, routes).  
- **Best Practice** → Store media in cloud (e.g., AWS S3/Cloudinary) and keep URLs in DB.  
- **Indexes** → Add on `username`, `email`, `hashtags` for fast queries.  

👉 *User is the parent entity; Posts and Reels are child entities linked via `userId`, forming a scalable Instagram‑like backend in MERN.*  



## 📘 Express App Structure (MVC Flow)

+------------------+        +------------------+        +------------------+
|  server.js       |        |      app.js      |        |      Routes      |
+------------------+        +------------------+        +------------------+
| import app       |───────►| app.use('/api',  |───────►| router.post(...) |
| app.listen(...)  |        |     routes)      |        | call controller  |
+------------------+        +------------------+        +------------------+
                      │                         │
                      │                         ▼
                  +------------------+        +------------------+
                  |    Controller    |───────►|    Response      |
                  +------------------+        +------------------+
                  | business logic  |        | res.status(...)  |
                  | call models     |        | res.json(...)    |
                  +------------------+        +------------------+

- `server.js` calls `app.js` → `app.js` registers `notes.route.js` → `notes.route.js` calls the controller function.

```markdown
## 📘 Express.js App Architecture (Flow)

server.js → app.js → notes.route.js(routes) → controller

+-----------+        +-----------+        +-----------+        +------------------+
| server.js |        |  app.js   |        |  routes   |        |    controller    |
+-----------+        +-----------+        +-----------+        +------------------+
| server run|  --->  | middleware|  --->  | features  |  --->  | features/api/logic|
| function  |        | main funcs|        | endpoints |        | business logic    |
+-----------+        +-----------+        +-----------+        +------------------+
```

- **server.js** → Entry point; starts the server and loads `app.js`.  
- **app.js** → Core setup; middleware, configs, global handlers.  
- **routes** → Defines endpoints (`GET`, `POST`, `PUT`, `DELETE`) and maps them to controllers.  
- **controller** → Contains actual feature logic (CRUD ops, DB queries, validations).  

-  *server.js boots the app, app.js wires middleware, routes define endpoints, controllers execute logic — modular Express structure.*  

