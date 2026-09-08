### installation guide

- npm init -y
- npm i express
- npm i mongoose
- npm i dotenv
- npm i jsonwebtoken
- npm i bcryptjs

you can’t use `await` at the top level unless your environment supports **top‑level await** (ESM modules in Node.js v14+ with `"type": "module"` in `package.json`). - aka Global `await`.

### ✅ Correct Usage

```js
// Option 1: Wrap in async function
import { connectDB } from "./config/db.js";

(async () => {
  await connectDB();
})();
```

```js
// Option 2: Use top-level await (only in ESM)
import { connectDB } from "./config/db.js";

await connectDB();
```

_Top‑level `await` works only in ESM modules; otherwise wrap it inside an async function._  
👉 So check if your project is `"type": "module"` — if not, you must use the async wrapper.

## 🔑 Auth Flow (Registration → Login → Auth Middleware)

### 1. **User Registration**

- **Frontend** → sends user data (`name, email, password`) via `POST /auth/register`.
- **Backend** → validates input, hashes password, saves user in DB.
- **Token Generation** → server issues a JWT (contains `_id`, role, expiry).
- **Frontend Storage** → token saved in **localStorage** or **cookies**.

### 2. **User Login**

- **Frontend** → sends credentials via `POST /auth/login`.
- **Backend** → verifies credentials against DB.
- **Token Issued** → new JWT returned.
- **Frontend** → stores token again (localStorage/cookies).

### 3. **Authenticated Requests (e.g., `/auth/me`)**

- **Frontend** → attaches token in request header:
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Backend Middleware** → checks `req.headers.authorization`.
  - Extracts token.
  - Verifies signature using `jwt_secret`.
  - Decodes payload → gets user ID, role.
- **Server Response** → returns user info if valid, else `401 Unauthorized`.

### 4. **Middleware Role**

- Acts as a **gatekeeper** for protected routes.
- Ensures only requests with valid tokens are allowed.
- Can also enforce **role‑based access** (e.g., admin vs normal user).

## 🎓 Easy Analogy

- **Registration/Login** → student gets an ID card (token).
- **Middleware** → security guard at the gate checks the card’s stamp (signature).
- **Auth/Me** → guard looks at the card details (user info) before letting you in.

- _User registers → gets token → frontend stores it → login issues new token → every protected request passes token in headers → middleware verifies before access._

- _Each user’s token is unique (contains ID, role, etc.), but the `jwt_secret` is common — during `/auth/me` we decode the token from `req.headers.authorization` using that secret to verify and extract user info._  
   👉 This makes clear: **token = user‑specific, secret = server‑specific authority stamp**.

- _if you put email, name, and ID in the payload, JWT decode will extract all those fields from the token using the secret._  
   👉 In simple terms: **whatever you embed in the token → you can read back after decode.**

- _We use `Bearer` in the `Authorization` header when sending the JWT to the server — e.g., `Authorization: Bearer <token>` — so middleware can read and verify it._  
  👉 Think of **Bearer** as saying: _“I’m carrying this token as proof of identity.”_

- _you can view token data even without the secret (e.g., on jwt.io), but the `jwt_secret` is required to verify the signature and ensure the token is authentic._  
   👉 In short: **decode shows payload, secret proves validity.**

- _You can decode JWT payload without the secret (e.g., on jwt.io), but in backend verification you must provide `jwt_secret` — otherwise it throws `JsonWebTokenError: secret or public key must be provided`._  
   👉 In short: **decode = read data, secret = verify authenticity**.

## can we decode token without JWT_Secret ? 
- **`jwt.decode(token)`** → just decodes the payload (Base64 → JSON).  
  - Does **not** need the secret.  
  - Does **not** verify authenticity.  
- **`jwt.verify(token, secret)`** → both decodes **and verifies** the signature.  
  - Needs the `jwt_secret`.  
  - Throws error if secret is missing or invalid.


## 📘 Code Example

```js
import jwt from "jsonwebtoken";

const token = "your.jwt.token";

// ✅ Decode without secret (just read payload)
const decoded = jwt.decode(token);
console.log("Decoded payload:", decoded);

// ❌ Verify without secret → throws error
try {
  const verified = jwt.verify(token); // missing secret
  console.log("Verified payload:", verified);
} catch (err) {
  console.error(err.message);
  // Output: JsonWebTokenError: secret or public key must be provided
}

// ✅ Correct verify with secret
try {
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Verified payload:", verified);
} catch (err) {
  console.error("Verification failed:", err.message);
}
```
  
- *`jwt.decode` reads payload without secret, but `jwt.verify` requires `jwt_secret` — otherwise it throws `JsonWebTokenError: secret or public key must be provided`.*  
👉 In short: **decode = read only, verify = read + trust**.


## 🔑 Why Middleware?
- Middleware in Express sits **between the request and the controller**.  
- It acts like a **checkpoint**: before the request reaches your controller logic, middleware can inspect, validate, or modify the request.  
- For authentication, middleware ensures only valid users can access protected routes.

## 📘 Authenticate Middleware Flow (Step by Step)

1. **Client Request**  
   - User hits `GET /api/auth/me`.  
   - Frontend attaches token in header:  
     ```http
     Authorization: Bearer <jwt_token>
     ```

2. **Middleware Triggered**  
   - Express routes are defined like:  
     ```js
     app.get("/api/auth/me", authMiddleware, userController.me);
     ```
   - Before `userController.me` runs, `authMiddleware` executes.

3. **Inside Middleware**  
   - Middleware checks `req.headers.authorization`.  
   - Extracts token (after `Bearer`).  
   - Uses `jwt.verify(token, jwt_secret)` to validate.  
   - If valid → attaches decoded user info to `req.user`.  
   - If invalid/missing → responds with `401 Unauthorized`.

4. **Calling `next()`**  
   - If token is valid, middleware calls `next()`.  
   - This passes control to the controller (`userController.me`).  
   - Controller can now safely use `req.user` to fetch DB info and return user profile.

## 🎓 Easy Analogy
Think of middleware as a **security guard at the gate**:
- Request = visitor.  
- Token = ID card.  
- Middleware = guard checks ID.  
- If valid → “Go ahead” (`next()`).  
- If invalid → “Access denied” (`401 Unauthorized`).  

- *Authenticate middleware checks `req.headers.authorization`, verifies JWT with secret, attaches user info to `req.user`, and calls `next()` so only valid requests reach the controller.*  

## 🔎 middleware and controllers share the same `req` object ? 
- When a request comes in, Express creates a single `req` object.  
- Middleware runs first and can **read or modify** `req` (e.g., attach `req.user`).  
- After calling `next()`, the **same `req` object** is passed to the controller.  
- That’s why controllers can access whatever middleware added (like `req.user`).   
- middleware and controllers share the same `req` object — middleware can enrich it (e.g., add `req.user`), and the controller then uses that data.*  

- hashing is one‑way only: you can generate a hash from input, but you cannot reverse it back to the original data.
  - 👉 In short: hash = irreversible fingerprint, not reversible encryption.

- https://www.md5hashgenerator.com/

- Hashing is a one‑way process: the same password always produces the same hash, but in secure systems a unique salt is added so that identical passwords generate different hashes, preventing collisions and rainbow‑table attacks.
  👉 In short: hash = deterministic one‑way, salt = uniqueness + security.

## 🔑 How `bcrypt.compare` Works
- When you hash a password with bcrypt, it generates a **unique salted hash**.  
- The salt ensures even if two users have the same password, their hashes are different.  
- `bcrypt.compare(plainPassword, hashedPassword)` internally:  
  1. Extracts the salt from the stored hash.  
  2. Re‑hashes the plain password with that salt.  
  3. Compares the result with the stored hash.  
- If they match → password is correct.  

  
*`bcrypt.compare` succeeds because bcrypt stores the salt inside the hash, re‑applies it during comparison, and checks if the newly hashed input matches the stored hash.*  
  👉 In short: **salted hash = unique per user, compare = reliable verification.**  

```js
import bcrypt from "bcrypt";

const password = "mySecret123";

// 🔑 Step 1: Hash the password with salt
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);
console.log("Hashed:", hashedPassword);

// 🔑 Step 2: Compare plain password with stored hash
const isMatch = await bcrypt.compare("mySecret123", hashedPassword);
console.log("Password match?", isMatch); // true

// 🔑 Step 3: Try wrong password
const wrongMatch = await bcrypt.compare("wrongPass", hashedPassword);
console.log("Password match?", wrongMatch); // false
```

## 🧩 What’s Happening
- `bcrypt.hash` → generates a salted hash (unique even for same password).  
- `bcrypt.compare` → extracts the salt from the stored hash, re‑hashes the input, and checks equality.  
- That’s why it works reliably even though hashes differ for identical passwords across users.

*A salt is a random string added to a password before hashing, ensuring that even identical passwords produce unique hashes and protecting against rainbow‑table attacks.*  
  👉 In short: **salt = randomness + extra security.**

- *hashing is case‑sensitive: `"Password"` and `"password"` produce completely different hashes because even a single character change alters the input fingerprint.*  
  👉 In short: **different case → different hash.**

- https://bcrypt-generator.com/