
### Why we need Authentication?
- **First Principle** → Any system must know *who* is making a request before granting access.  
- **Problem it solves** → Prevents unauthorized users from reading, modifying, or deleting data.  
- **Real‑world need** → Protects sensitive info (bank accounts, medical records, private posts).  
- **Outcome** → Ensures trust, accountability, and secure interaction between user and system.


### Think of **school admission** as **backend authentication**:

- **Step 1: Identity Submission**  
  - Student provides details → *name, email, Aadhaar card*.  
  - Backend equivalent → *user submits credentials (username, password, ID proof)*.  

- **Step 2: Verification**  
  - School checks documents → ensures they’re valid.  
  - Backend equivalent → system verifies credentials against DB.  

- **Step 3: Admission Granted**  
  - Student is officially admitted.  
  - Backend equivalent → user is authenticated (identity confirmed).  

- **Step 4: ID Card Issued**  
  - Student gets a school ID card → proof of identity for future access.  
  - Backend equivalent → system issues a **token/session** (JWT, cookie) → proof of authentication for future requests.  
    - Just like a student uses school facilities with an ID card, an authenticated user uses backend features with a token.


### user auth flow

1. **User Registration Request**  
   - A new user (e.g., Rohan, Neha) sends data via API:  
     ```json
     { "name": "Rohan", "email": "rohan@email.com", "password": "12345" }
     ```  
   - Endpoint: `POST /api/auth/register`.

2. **Server Processing**  
   - The backend receives the request.  
   - It validates the input (unique email, password strength, etc.).  
   - Password is hashed (e.g., using bcrypt) for security.

3. **Database Storage**  
   - User info is stored in MongoDB as a document:  
     ```json
     {
       _id: "ir98q3reuihfrnsifd",
       name: "Rohan",
       email: "rohan@email.com",
       password: "<hashed_password>",
       __v: 0
     }
     ```

4. **Token Generation (JWT)**  
   - Server uses a secret key (`JWT_SECRET`) to generate a **JWT token**.  
   - Token encodes user identity (e.g., `_id`, email).  
   - Example: `"Token - Rohan"`.

5. **Response to User**  
   - Server sends back a success response with the token.  
   - User stores this token (usually in localStorage, cookies, or app state).

6. **Future Requests (Authentication)**  
   - When user calls another API (e.g., `GET /api/posts`), they attach the token in headers:  
     ```http
     Authorization: Bearer <jwt_token>
     ```  
   - Server verifies the token → confirms identity → grants access.

## 🔑 Do servers save token info in DB?
- **JWT (stateless tokens)** → By default, the server does **not** save JWTs in the database.  
  - Expiry (`exp`) is embedded inside the token itself.  
  - Server just verifies the signature + expiry when the token is presented.  
  - Advantage → scalable, no DB lookup needed.  

- **Session tokens (stateful)** → In some systems, tokens **are stored in DB or cache** (e.g., Redis).  
  - Server keeps track of active sessions, expiry, and revocation.  
  - Advantage → allows forced logout, token invalidation, fine‑grained control.  

- *JWT expiry is inside the token itself (no DB storage), but session‑based systems may store token info in DB/cache for revocation and control.*  

### All About Token
- **Token Expiry** → JWTs carry an `exp` field; once time passes, the server rejects them. Cookies can auto‑expire, but localStorage needs manual cleanup.  
- **Access vs Refresh Token** → AccessToken is short‑lived (minutes/hours) for security; RefreshToken is long‑lived (days/weeks) and used to silently issue new access tokens.  
- **Auto Removal in UI** → AccessToken “disappears” because it expires and is replaced via RefreshToken flow — frontend or server logic refreshes it, not manual deletion.

- *AccessToken expires quickly for safety, RefreshToken renews it behind the scenes, and expiry makes tokens invalid even if still stored in localStorage or cookies.*


## 📘 Axios Interceptors for Auth Flow

### 1. **Setup Axios Instance**
Create a reusable axios instance with base config:
```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api.com",
  withCredentials: true,
});
```

### 2. **Attach AccessToken to Requests**
Use a **request interceptor** to add the token automatically:
```js
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
```
👉 Ensures every API call carries the latest access token.


### 3. **Handle Expired AccessToken**
Use a **response interceptor** to catch `401 Unauthorized` errors:
```js
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired & not retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call refresh endpoint
        const res = await axios.post("/api/auth/refresh", {
          token: localStorage.getItem("refreshToken"),
        });

        // Save new access token
        localStorage.setItem("accessToken", res.data.accessToken);

        // Retry original request with new token
        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return api(originalRequest);
      } catch (err) {
        // Refresh failed → logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
```

### 4. **Flow Summary**
- **AccessToken** → short‑lived, attached to every request.  
- **Interceptor** → retries failed requests if token expired.  
- **RefreshToken** → used silently to fetch new AccessToken.  
- **Auto‑logout** → if refresh fails, user is redirected to login.

- *Axios interceptors let you auto‑attach tokens to requests and refresh expired access tokens transparently, keeping users logged in without manual re‑authentication.*  


## 🔑 Refresh Token Expiry
- **AccessToken** → short‑lived, auto‑refreshed using RefreshToken.  
- **RefreshToken** → long‑lived, but **not infinite**. It also has an expiry.  
- **When RefreshToken expires** → backend can’t issue new access tokens anymore.  
- **Result** → user must re‑login with credentials to get a fresh pair of tokens.  

*If the RefreshToken expires, the user must log in again — that’s the final fallback for security.*  

## 🔑 Auth Cycle with Axios Interceptors

1. **Login**  
   - User submits credentials → server verifies → issues **AccessToken + RefreshToken**.  
   - AccessToken stored in memory/localStorage; RefreshToken usually in secure cookie.

2. **Request**  
   - Axios request interceptor attaches AccessToken to every API call (`Authorization: Bearer <token>`).

3. **Expiry & Error**  
   - AccessToken expires after a short time.  
   - Next API call fails with `401 Unauthorized`.

4. **Interceptor Refresh**  
   - Response interceptor catches `401`.  
   - Sends RefreshToken to `/auth/refresh`.  
   - Server issues a new AccessToken.

5. **Retry**  
   - Interceptor retries the original request with the new AccessToken.  
   - User stays logged in seamlessly.

6. **RefreshToken Expiry**  
   - If RefreshToken also expires → refresh fails → user must re‑login.  

- *Login issues Access + Refresh tokens; Axios interceptors auto‑attach, refresh on expiry, and retry requests — if refresh fails, user re‑authenticates.*  

- If a user is logged in, every request from the UI carries the access token so the backend can validate identity and allow access.

- If a token is modified, the signature check fails and the server rejects it immediately.
- If Neha steals Rohan’s token, she can act as Rohan until the token expires — server will accept it because the signature is valid, which is why tokens must be short‑lived and protected,Server can’t detect who holds the token, only that it’s valid. That’s why we use short expiry + refresh tokens + secure storage to reduce risk.

-  on every fresh login, the server issues a new access token (and often a new refresh token) to ensure security and reset session validity.

- A token usually contains the user’s MongoDB _id, role/permissions, and other claims (like email or issued‑at/expiry) — enough for the server to identify and authorize the user.

- you need a JWT library to generate/verify tokens, and a secret key to sign them securely.

### 🎓 JWT Secret Analogy
  - Think of the **JWT secret** like a **school’s unique official stamp**.  
  - Each school has its own stamp/ID card design → only that school can issue valid ID cards.  
  - If another school tries to copy or tamper, the stamp won’t match → card is rejected.  
  - Similarly, the server uses its **secret key** to sign tokens, and only that key can prove authenticity.  

  *JWT secret is unique like a school’s stamp or ID card — only the issuing school/server can validate it.*  

- Generate unique JWT Secret =  https://jwtsecrets.com/


## 🔑 What is a JWT Secret?
- The **JWT secret** is a private key string used by the server to **sign** tokens.  
- It ensures that the token’s payload (user ID, roles, expiry, etc.) cannot be tampered with.  
- When a client presents a token, the server uses the same secret to **verify the signature** and confirm authenticity.

## 📌 Where is it Stored?
- **On the server only** — usually in environment variables (`process.env.JWT_SECRET`) or secure config files.  
- **Never in the database** and **never exposed to the client**.  
- Think of it like a **school’s unique stamp** kept in the principal’s office — students only see the stamped ID card, not the stamp itself.


## ⚡ Why is it Important?
- **Integrity** → prevents token tampering; any change breaks the signature.  
- **Trust** → only the server with the secret can issue valid tokens.  
- **Security** → if leaked, attackers could forge tokens, so it must be protected like a password.


## 🧑‍💻 Example
```js
import jwt from "jsonwebtoken";

const payload = { userId: "123", role: "admin" };
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

// Later, verify:
jwt.verify(token, process.env.JWT_SECRET);
```

*JWT secret is a private server‑side key used to sign and verify tokens — unique like a school’s stamp, never stored in DB or exposed to clients.*  
👉 This analogy makes it crystal clear: **secret = authority stamp**.  


```yaml
- installation guide:
  - npm init -y && npm i jsonwebtoken express mongoose
  - npm i -D nodemon
```

- https://www.jwt.io/

```js
(new Date()).getTime();
```


## 🛡️ JWT is Stateless
- **Stateless** means the server doesn’t keep track of who is logged in — it only checks if the token is valid using the secret.  
- The token itself carries all the info (user ID, role, expiry).  

## ⚠️ If Token is Stolen
- If someone steals your token, the server can’t “know” it’s stolen.  
- As long as the signature is valid and the token hasn’t expired, the server will accept it.  
- That’s the **main risk** of stateless JWT.

## 🔑 How Servers Handle This
1. **Short Expiry** → Access tokens expire quickly (minutes/hours). Even if stolen, they don’t last long.  
2. **Refresh Tokens** → Longer‑lived, but stored more securely and can be revoked in DB.  
3. **Blacklist/Denylist** → Server keeps a list of revoked tokens (breaks pure statelessness, but adds safety).  
4. **Secret Rotation** → If compromise is suspected, server changes the secret → all old tokens instantly invalid.  
5. **Force Logout** → User must log in again to get fresh tokens.

- most systems use a hybrid approach: short‑lived access tokens for requests, and long‑lived refresh tokens to renew them securely. 👉 This balances performance (stateless access) with security (refresh revocation).

## 🎓 Easy Analogy
Think of JWT like a **school ID card**:
- The card itself proves you’re a student (stateless).  
- If someone steals your card, they can enter until it expires.  
- To stop misuse, schools issue **short‑validity cards**, keep a **revoked list**, or change the **stamp design** (secret rotation).  

- *Because JWT is stateless, a stolen token stays valid until expiry; mitigation is short lifetimes, refresh‑token revocation, blacklists, or secret rotation.*  

- *HPA (Horizontal Pod Autoscaler) automatically scales the number of pods in Kubernetes based on CPU/memory usage or custom metrics.*  
  👉 Think of it as Kubernetes auto‑adjusting workload replicas to handle traffic efficiently.

- use Y combinator to get job.
- 