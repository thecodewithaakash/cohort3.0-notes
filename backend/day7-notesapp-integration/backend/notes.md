### 📘 REST API (Representational State Transfer)

- REST is an **architectural style** for designing APIs.
- It uses **HTTP verbs** (GET, POST, PUT, PATCH, DELETE) to represent actions on resources.
- These verbs are **not just annotations** — they carry **semantic meaning**:
  - **GET** → Retrieve data (safe, idempotent).
  - **POST** → Create new resource.
  - **PUT/PATCH** → Update existing resource.
  - **DELETE** → Remove resource.

    ### ⚠️ Why not misuse verbs?
    - Technically, you _could_ send data with GET instead of POST, and it might “work.”
    - But this **breaks REST principles**:
    - GET should never change server state.
    - POST is intended for creating resources.
    - Misusing verbs leads to confusion, poor readability, and violates HTTP standards.


## Patch vs PUT
👉 *PATCH is for partial updates — e.g., if a resource has 5 fields and you only want to replace 3, PATCH updates just those 3 while leaving the other 2 unchanged.*  

### ⚡ Quick contrast
- **PUT** → replaces the entire resource (all 5 fields, even if only one changed).  
- **PATCH** → modifies only the specified fields (partial update).  
- *PATCH = targeted field updates, PUT = full replacement.*


# Understanding CORS Error
**A CORS error happens when your browser blocks a cross‑origin request because the server hasn’t explicitly allowed it. In interviews, the key is to explain that it’s a browser‑enforced security feature tied to the Same‑Origin Policy, and the fix requires proper server headers (like `Access-Control-Allow-Origin`).**  


### 1. Core Concept
- **CORS (Cross‑Origin Resource Sharing)** extends the **Same‑Origin Policy (SOP)**.  
- SOP says: a web page can only request resources from the *same origin* (same protocol, domain, and port).  
- CORS allows controlled exceptions: the server must declare which origins are permitted.

### 2. Why Errors Occur
- When your frontend (e.g., `http://localhost:3000`) calls a backend (e.g., `http://localhost:5000`), the browser sees different ports → different origins.  
- If the backend doesn’t respond with proper CORS headers, the browser blocks the response and throws a **CORS error**.  
- **Important:** This is enforced by browsers, not by Node/Express itself. Server‑to‑server requests don’t face CORS issues.  [GeeksForGeeks](https://www.geeksforgeeks.org/web-tech/understanding-cors-and-resolving-cors-errors/)  [frontendgeek.com](https://www.frontendgeek.com/blogs/what-is-cors-cross-origin-resource-sharing-explained-for-interviews)  

### 3. How CORS Works
- **Step 1: Browser adds `Origin` header** to the request.  
- **Step 2: Server checks if that origin is allowed.**  
- **Step 3: Server responds with headers like:**
  - `Access-Control-Allow-Origin: http://localhost:3000`  
  - `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`  
  - `Access-Control-Allow-Headers: Content-Type, Authorization`  
- **Step 4: Browser validates headers.** If valid → request succeeds; if not → blocked.  [frontendgeek.com](https://www.frontendgeek.com/blogs/what-is-cors-cross-origin-resource-sharing-explained-for-interviews)  

### 4. Preflight Requests
- For non‑simple requests (e.g., custom headers, methods like PUT/DELETE), the browser sends an **OPTIONS preflight request** first.  
- The server must respond with allowed methods/headers; otherwise, the actual request is blocked.  

### 5. Risks & Best Practices
- **Don’t use `Access-Control-Allow-Origin: *` in production** — it allows any domain, which can expose APIs to abuse.  
- Always restrict origins to trusted domains.  
- If credentials (cookies, tokens) are needed, set `Access-Control-Allow-Credentials: true` and avoid `*`.  [frontendgeek.com](https://www.frontendgeek.com/blogs/what-is-cors-cross-origin-resource-sharing-explained-for-interviews)  

- **Definition:** *CORS error = browser blocking a cross‑origin request due to missing/invalid CORS headers.*  
- **Cause:** *Server didn’t explicitly allow the requesting origin.*  
- **Fix:** *Configure server to send correct CORS headers (`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, etc.).*  
- **Key Point:** *It’s a browser security feature, not a bug in your code.*  

👉 *“A CORS error occurs when the browser enforces Same‑Origin Policy and the server hasn’t allowed the client’s origin via CORS headers — the solution is proper server‑side configuration.”*  
