
## CRUD operation in Backend
- **Create → POST**  
- **Read → GET**  
- **Update → PUT / PATCH**  
- **Delete → DELETE**  

- When we reload, data is lost because it’s stored in RAM (Random Access Memory) — an in‑memory, temporary storage. 

## 📒 Notes: Frontend–Backend JSON Flow

- **Frontend** → sends/receives data as **stringified JSON**  
- **Backend** → sends/receives data as **stringified JSON**  

- This means:  
  - **Frontend** doesn’t know backend’s internal logic.  
  - **Backend** doesn’t know frontend’s internal implementation.  

- Flow:  
  - **Frontend** → sends request to backend API with JSON  
  - **Backend API** → takes request + JSON, performs operations, returns stringified JSON  
  - Communication is **bidirectional**: both sides only care about the **JSON contract**, not each other’s internals  


## 📒 Notes: Frontend–Backend–Storage
- **Frontend(user data) → Backend → Storage (Data = X)**  
- **Backend → Frontend** (response)  
- **Save → persist data**  
- Analogy (Money = Data):
    - **Money → Safe place → stay**  
    - **Tijori → storage**  
    - **Bank → storage**  
    - **Pocket → storage**  
- Frontend sends data to backend, backend saves it in storage — like keeping money safe in tijori, bank, or pocket.


## 📒 Notes: E‑Commerce Data Flow

1. **UI (Frontend)**  
   - User interacts with products, carts, users, cities. 
   - Example: *Add product to cart* → triggers action.  

2. **API Layer**  
   - UI sends request as **JSON** → `POST /cart/add`.  
   - Acts as the **bridge** between frontend and backend.  

3. **Backend (Server Logic)**  
   - Receives request from API.  
   - Validates data, applies business rules (e.g., check stock, user auth).  
   - Prepares response.  

4. **Database (Storage)**  
   - Backend queries DB → save/fetch/update/delete data.  
   - Example: *Insert product into cart table*.  

5. **Response Flow**  
   - DB → Backend → API → UI.  
   - UI updates with new cart state.  

- Frontend only knows backend api, UI can't access DB directly.

## 📒 Notes: DB Management Analogy

- **DB like lockers in a room**  
  - Many lockers (l1, l2, l3 …)  
  - If items (saman) are placed randomly — shoes in perfume locker, perfume in clothes locker — it’s **inefficient & unstructured**  

- **Management layer**  
  - Organizes lockers → ensures data is stored in the right place  
  - Prevents chaos and makes retrieval efficient  

- **Website scale example**  
  - Suppose **1000 users** → each user’s data must be stored, organized, and managed  
  - Without proper DB management, data becomes messy and hard to query  
  - With structured DB + management, user data is consistent, reliable, and scalable  

## 📒 Why we need Management ? 

- **Database (DB)** → like a room full of lockers.  
  - If you put shoes in a perfume locker or money in a clothes locker → data is **unstructured & inefficient**.  

- **DBMS (Database Management System)** → hired by the **website owner** to manage these lockers.  
  - Ensures data is:  
    1. **Management** → organized into correct tables/structures.  
    2. **Safe** → protected from loss or misuse.  
    3. **Saved** → persisted beyond reloads.  
    4. **Accessible** → easily retrievable by the owner/user.  

- **Website scale example**  
  - Suppose **1000 users** on an e‑commerce site.  
  - Each user’s profile, cart, and orders must be stored properly.  
  - Without DBMS → chaos, slow queries, errors.  
  - With DBMS → structured, secure, scalable, and efficient.  


## 📒 Notes: Types of Databases

1. **Relational Database (RDBMS)** - Sequence,Tabular format,structured  
   - Data stored in **structured, tabular form** (rows & columns).  
   - Relationships maintained between tables.  
   - Best for **structured, consistent data**.  
   - Examples: **SQL, MySQL, PostgreSQL**.  

2. **Non‑Relational Database (NoSQL)** - jumbled form with unique identity..
   - Data stored in **flexible, jumbled form** with unique identity keys.  
   - Often uses **JSON documents** or graph structures.  
   - Best for **unstructured or semi‑structured data**, scalability, fast queries.  
   - Examples: **MongoDB**. 
    -  Redis is an in‑memory NoSQL key‑value store, used for caching, fast data access, and real‑time applications. 

- GraphQL is an API query language, Prisma is an ORM — neither is a database, but both sit between your app and the DB to simplify data access .
👉  *Relational DBs = structured tables with relationships; Non‑Relational DBs = flexible JSON/graph storage for unstructured data.* 

## Understanding MongoDB

- **MongoDB (Database)**  
  - it is a Database service provider company, available **24×7**.  
  - Stores all business data (users, products, orders).  

- **Server (Backend + Frontend)**  
  - **Backend (B)** → business logic, API endpoints.  
  - **Frontend (F)** → user interface, what customers see.  
  - **DB** sits inside the server architecture, connected to backend.  

- **Client (Browser/Laptop)**  
  - Users interact with the website.  
  - Communication happens via **HTTP/HTTPS requests**.  
  - Example: *User clicks “Add to Cart” → request sent to server.*  

- **Flow**  
  1. **UI action** → triggers API call.  
  2. **Backend** → receives request, validates, applies logic.  
  3. **Backend ↔ MongoDB** → fetches/saves data.  
  4. **Response** → sent back via HTTP/HTTPS.  
  5. **Frontend** → updates UI for the user.  

- *Frontend triggers API calls → Backend processes → MongoDB stores/retrieves → Response flows back securely via HTTP/HTTPS.* 


## 📒 Pendrive vs MongoDB vs Cloud
- **Pendrive (Local Storage)**  
  - Works like a **personal locker**: you can keep your data safe even without a machine (laptop, mobile, PC).  
  - But pendrive is **standalone** — it only stores, it doesn’t process.  
  - To **travel/use data**, you need a **processing unit** (CPU, GPU, laptop, mobile).  

- **MongoDB (Company Storage) - Storage + Machine**  
  - Acts as a **storage + machine** for organizations.  
  - Unlike pendrive, it’s **always online (24×7)** and can serve multiple users at once.  
  - Data stored here can travel to processing units (servers) when needed.  

- **Processing Units**  
  - **CPU/GPU/Laptop/Mobile** → handle computation.  
  - Storage alone is passive; processing units give data meaning (analytics, queries, business logic).  

- **Cloud Providers (AWS, Azure, GCP)**  
  - Provide **machines on demand**: both storage + processing.  
  - Think of them as renting **infinite lockers + workers**.  
  - Scale globally, 24×7, beyond local pendrive or single MongoDB server.  


## 📒 MongoDB as a Company 
- **MongoDB = Company**  
  - Think of MongoDB itself as the **organization** that provides data storage services.  

- **1) DB (Database)** → The **core storage unit**.  
  - Like the company’s warehouse where all data (products, users, orders) is kept.  

- **2) Atlas (Cloud Storage Provider)** → The **global storage service**.  
  - MongoDB Atlas is like the company’s **international branch network**, offering storage across regions (USA, India, Europe, Africa, China).  
  - Ensures data is available **24×7 worldwide**.  

- **3) GUI → Compass (Visualization Tool)**  
  - Acts as the **dashboard/visual manager**.  
  - Lets developers and admins **see, query, and manage data** easily.  

- **Global Reach (World Map)**  
  - MongoDB + Atlas = storage spread across continents.  
  - Data can be stored close to users (India, USA, Europe, Africa, China,Antarctica) for faster access.  
  
### MongoDB installation guide ~ Windows
- Download MongoDB installer - https://www.mongodb.com/try/download/community-edition
- Run setup → Run as Administrator.
- Configure environment variables (optional for CLI use).
- check version in cmd --> mongod --version or mongod --v
- Start MongoDB service → ready to use.

- A cluster in databases is a collection of servers (nodes) that work together as a single system to provide storage, replication, and high availability. 


- *We choose a server region close to our main audience (e.g., Mumbai for India) to reduce latency — nearby servers mean faster response times compared to distant ones like Singapore.* 
-  **India audience → India server → low latency; India audience → Singapore server → higher latency.**
- gap between data packets is called latency.

## 📒 MongoDB Atlas Connection Flow

1. **Machine + Storage (AWS/Cloud)**  
   - Atlas Provide --> servers + storage in the cloud.  
   - This is where your database cluster lives.  

2. **Cluster Created**  
   - You set up a **cluster** (group of DB servers) inside Atlas.  
   - Provides replication, scaling, and high availability.  

3. **Compass (GUI Tool)** ~ connect atlas with GUI --> MongoDB compass
   - Use MongoDB Compass to **visualize and query** your data.  
   - Acts as a friendly dashboard for developers.  

4. **Connect with Your Project**  
   - Link the cluster to your application/project.  
   - Atlas generates a **connection string** for integration.  

5. **Connection String Setup**  
   - Copy the connection string → paste into your project config.  
   - Add your **username + password** for authentication.  


## 📒 Express + MongoDB with Mongoose

- **Express.js** → backend framework for APIs.  
- **MongoDB** → database for storing data.  
- **Problem** → Express cannot directly talk to MongoDB.  
- **Mongoose (Bridge)** → ODM that connects Express with MongoDB, mapping JS objects to DB documents.  
- *Mongoose acts as the bridge that lets Express.js communicate with MongoDB.* 
- mongoose is a Object Data modelling.
- An ODM (Object Data Mapper) like Mongoose is a library that lets you define schemas and models in your Node.js code, which then map directly to MongoDB collections. It acts as a structured bridge between Express.js (your backend framework) and MongoDB (your database).

## 📒 HTML, DOM, and JS

- **HTML** → defines structure/content.  
- **JS** → adds logic & interactivity.  
- **Problem** → HTML cannot directly understand JS.  
- **DOM (Bridge)** → converts HTML into a **tree‑like object structure** that JS can access and manipulate.  
- **Flow** → HTML → DOM (objects) → JS → dynamic updates on page.  
- *DOM acts as the bridge — it represents HTML as objects so JavaScript can read, modify, and control the page.* 
