## 📒 IP (Internet Protocol)

- **IP = Internet Protocol** → identifies how your device connects to the internet.
- **Examples of sources:**
  - Mobile hotspot
  - Wi‑Fi (home, office, friend’s)
  - LAN (wired network)
- **IP Address** → unique identifier assigned to your device on that network.
- _IP is the protocol that defines your internet connection, and the IP address uniquely identifies your device on that network._

## 📒 Client–Server Architecture

- **Client (Frontend)** → user interface, sends requests.
- **Server (Backend)** → processes logic, handles requests.
- **Database (Storage)** → stores and retrieves data.
- **Flow** → Client ↔ Server ↔ Database → forms the complete architecture.

- _Client handles UI, Server handles logic, Database handles storage — together they form client‑server architecture._

## 📒 Hotel Analogy for Web Architecture

- **Frontend (Client)** → What customers see: lobby, lights, ambience, tables, chairs.
- **Backend (Server)** → The kitchen: where orders are processed and prepared.
- **Database (Storage)** → The fridge: where ingredients (data) are stored.
- **Flow** → Customer (client) calls waiter → waiter passes order to kitchen (server) → kitchen uses fridge (DB) → food served back to customer.

## 📒 Ordering Hakka Noodles = Client–Server Architecture

- **Client (You)** → Place order to the waiter(API call).
- **Waiter(API Call)** → Passes request to kitchen(Server) = request handler.
- **Kitchen (Server)** → Prepares noodles = business logic/operations.
- **Ingredients (Raw Data)** → Oil, cabbage, sauces, noodles, masala.
- **Database (Storage)** → Fridge/pantry where ingredients are stored systematically.
- **Response** → Cooked noodles served back = API response to client.

## 📒 Mongoose as ODM Bridge

- **ODM (Object Data Modeling)** → Maps JS objects to MongoDB documents.
- **Mongoose** → Provides schemas, validation, and models.
- **Bridge Role** → Connects backend app (Express/Node) with MongoDB.
- **Flow** → App → Mongoose (ODM) → Database.

## 📒 Folder Structure Basics

- **MVC (Model–View–Controller)**
  - **Model** → Data & architecture.
  - **View** → UI presentation.
  - **Controller** → Logic & request handling.
- **Layered Approach** → Organize code into layers (presentation, business, data).
- **Service‑Based** → Separate reusable services for cleaner, scalable design.

## 📒 Backend MVC Structure

- **src/app.js** → Contains core functionality, routes, and logic.
- **server.js** → Handles server startup & DB connection.
- **MVC Pattern** → Organizes code into Model, View, Controller for clarity.

### CommonJS vs ES modules

The code snippet uses **CommonJS** module system (`require`) — not ES Modules (`import`) and not plain ES5.

## 📒 Breakdown

- `const express = require("express");` → CommonJS `require` syntax.
- CommonJS is Node.js’s default module system before ES Modules (`import/export`) support.

- successful engineer:
  - doing/practice/exploring/building: 70%
  - Learning: 30%

## 📒 MongoDB & Backend Structure

- **MongoDB → Flexible**  
  → Can store **structured + unstructured** data.  
  → Example: You can directly insert a student record with fields like:
  - name
  - email
  - blood group
  - father name
  - mother name
  - Aadhaar card details
  - course
  - marks

- **Backend → Needs proper structure**  
  → Must define **schemas/models** with all required properties.  
  → Ensures every student record follows the same format.  
  → Example: `StudentSchema` enforces rules like `email` required, `marks` as Number, etc.

- **Reason**  
  → Provides **consistency, validation, and predictable handling** of data.  
  → Prevents missing or malformed fields when saving to DB.

- _MongoDB is flexible, but backend enforces strict schemas so student data (name, email, Aadhaar, marks, etc.) stays consistent and reliable._

## 📒 MongoDB → Collections (Instagram Example)

- **Users** → Profile info, followers, etc.
  - **Stories** → Temporary posts linked to users.
- **Posts** → Photos, captions, likes, comments.
- **Reels** → Short videos (S = separate collection).
- **Messages** → Chats/DMs (S = separate collection).

- _Instagram data can be organized into MongoDB collections like Users, Posts, Reels, Messages, and Stories for structured storage._

- In **Relational Databases (SQL)** → data is organized into **Tables** (rows & columns).
- In **MongoDB (NoSQL)** → data is organized into **Collections** (groups of JSON‑like documents).
- **Mapping analogy:**
  - **DB → Tables** (SQL)
  - **DB → Collections** (MongoDB)

## 📒 Mongoose Schema & Validations
- mongoose Structure: **Class → Schema** → Blueprint of an object.
- **Schema defines fields + validations + DataTypes:**
```js
class{
  - `name: String, required`
  - `age: Number, required`
  - `dob: String`
  - `email: String, unique, must contain @, length ≥ 12`
}
```
- **Validations** → Ensure correct data types & rules.
- **Flow** → Schema → Model → Save to DB.


## 📒 Project Guidelines: Notes CRUD with Mongoose

### 1. Define Schema
- Use **Mongoose** to create a schema for `Notes`.  
- Required fields:  
  - **Title** → `String`, must be **required**.  
  - **Description** → `String`, must have **minLength: 10**.  

### 2. Create Model
- Convert schema into a **Mongoose model** (`NotesModel`).  
- This model will represent the `notes` collection in MongoDB.  

### 3. CRUD Operations
- **Create** → Add new notes with title + description.  
- **Read** → Fetch notes from DB.  
- **Update** → Modify existing notes.  
- **Delete** → Remove notes.  

### 4. Validation Rules
- Title cannot be empty.  
- Description must be at least 10 characters.  
- Ensures **data consistency** before saving to DB.  

## 📒 Mongoose Operations & Promises

- **Most Mongoose operations return a Promise** → e.g., `create()`, `find()`, `updateOne()`, `save()`.  
- You can handle them with **async/await**.  
- Always wrap in **try/catch** for error handling.  
- ⚠️ If you pass a callback, it won’t return a Promise.  


## 📒 Example: Create Note (Title + Description)

```js
// Controller function for creating a note
app.post("/notes", async (req, res) => {
  try {
    const { title, description } = req.body;

    // returns a promise
    const newNote = await NotesModel.create({
      title,
      description,
    });

    res.send({
      success: true,
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating note",
      error: error.message,
    });
  }
});
```

### key interview notes
- **Schema → Model → CRUD** is the flow in Mongoose.  
- **All operations return Promises** → use `async/await`.  
- **Always use try/catch** → ensures safe error handling.  
- **Validation** (e.g., `required`, `minlength`) prevents bad data before saving.  
- **Best practice** → Keep DB logic inside controllers/services for clean architecture.  

-  *Mongoose CRUD operations return Promises, so use async/await with try/catch for clean, reliable backend code.* 
- *MongoDB automatically generates a unique `_id` for every document, so we don’t need to write it manually.* 
- *`__v` in MongoDB is a version key added by Mongoose to track document revisions for concurrency control.* ✅