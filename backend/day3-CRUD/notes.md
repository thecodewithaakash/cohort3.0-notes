
## 📒 Notes: Node.js, Express.js & HTTP

- **Node.js(JavaScript Runtime for server)** → Runs JavaScript on the server.  
  - Handles requests coming from the browser via **HTTP**.

- **Express.js** → Framework built on Node.js.  
  - Simplifies handling routes, middleware, and server logic.

- **HTTP** → Protocol for communication between client & server.  
  - Works with **req** (request) and **res** (response).

- **req (Request)** → Data coming from the frontend (client) to the backend.  
  - Example: user submits a form → backend receives data.

- **res (Response)** → Data sent back from backend to frontend (client).  
  - Example: backend sends confirmation or JSON result.
 

## 📒 Notes: API Request & Postman
- **req → body → JSON** → send data in request body  
- **query** → extra info passed in API URL  
- **params** → dynamic path values  
- **files/file** → media data or file transfer  

- **Postman** → acts like a virtual frontend  
  → used for testing & running APIs  


### **one concept → multiple names/terms**:
- **In‑place** ↔ **In‑memory** ↔ **Without extra space**  
- **Heap memory** ↔ **Dynamic memory** ↔ **Runtime allocation**  
- **Stack memory** ↔ **Automatic memory** ↔ **Function call frame**  
- **Garbage collection** ↔ **Automatic memory management** ↔ **GC**  
- **Shallow copy** ↔ **Reference copy** ↔ **Pointer copy**  
- **Deep copy** ↔ **Cloned copy** ↔ **Independent copy**  
- **CRUD** ↔ **Create, Read, Update, Delete** ↔ **Basic DB operations**  
- **Endpoint** ↔ **Route** ↔ **API path**  
- **Middleware** ↔ **Request handler chain** ↔ **Filter/Interceptor**


## Basic API Notes - Backend Perspective ~ CRUD
1. **Send data to frontend → GET**  
2. **Get data from Frontend → POST**  
   - **post → body** → `axios.post('url', data)`  
   - **params - Dynamic URL** → `fakestoreapi.com/products` or   `fakestoreapi.com/products/:id`  
   - **query** → `fakestoreapi.com/products?limit=10&skip=0`   
        - we can use **params** also in query params.

3. **Update data → PUT / PATCH**  
   - **put** → replace whole resource  
   - **patch** → update partial fields  

4. **Delete data → DELETE**  
   - **delete** → remove resource by id/params  


## 📒 Notes: PUT vs PATCH

- **Object fields:**  
  - name  
  - age  
  - address  
  - profile  
  - company  

- **PATCH → update specific field/Entity only**  
  - Example: change only `name`  
  - replace single entity inside the Object.

- **PUT → replace whole object**  
  - Even if only `name` is changed, the **entire resource** is updated/replaced  
  - Entire Resource/Object will replace.


## 📒 Frontend–Backend via API
- The **API** is the bridge/messenger between frontend and backend.  
- Frontend doesn’t directly “talk” to backend — it always goes through the API layer.  

- **Frontend → API → Backend** (request)  
- **Backend → API → Frontend** (response)  
- **Data format → JSON**  
- **Testing → Postman/Test tools**  
- **Params → extra values in request**  
