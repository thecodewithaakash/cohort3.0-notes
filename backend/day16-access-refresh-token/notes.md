- In engineering, a “typo” means a small mistake in writing code, text, or documentation — usually a slip of the keyboard.

```js
User.findById(id).select("-password"); // works
User.findOne({ email }).select("name email"); // works
User.find({ active: true }).select("name"); // works
```

\*_`app.use()` registers middleware or routers in an Express app, applied globally unless a path prefix is given._

```js
// Global middleware
app.use(express.json());

// Router mounting
app.use("/api/users", userRouter);
```

- Generate a JWT secret of at least 256 bits (32 bytes, ~64 hex characters) for HS256 — longer only if using HS384/HS512 or compliance requires.

```js
const crypto = require("crypto");
const secret = crypto.randomBytes(32).toString("hex"); // 64 hex chars
```

- _In frontend, accessToken is stored in memory/state (Redux/Context), while refreshToken should stay in secure HttpOnly cookies — not Redux or Context._

- _Access token → client state for quick auth; Refresh token → secure cookie for rotation & protection._

### Most used HTTP status codes

- **200 OK** → Success
- **201 Created** → Resource created
- **400 Bad Request** → Invalid input
- **401 Unauthorized** → Auth required/invalid token
- **403 Forbidden** → Authenticated but no permission
- **404 Not Found** → Resource missing
- **409 Conflict** → Resource conflict (e.g., duplicate)
- **500 Internal Server Error** → Server failure  
  ⚡\*\* _Most used codes: 200, 201, 400, 401, 403, 404, 409, 500._

```js
// mongo_url = mongodb://localhost:27017/database_name
// During schema/model creation, you can name the collection,
// and Mongoose will auto-create it in the database.
```

- The backend knows a token is expired by checking the exp (expiry) claim inside the JWT payload — jwt.verify() automatically validates this against the current time, and rejects if expired.

```js
// A JWT carries an `exp` claim = issuedAt + expiryDuration
// Backend checks this timestamp against current time to decide validity
// You can decode and see the `exp` field at jwt.io for clarity
// jwt.verify() → verifies token authenticity & integrity using ACCESS_TOKEN_SECRET & Checks signature + expiration → ensures token is valid & untampered
```

```js
// ⚠️ Important: JWT "exp" claim is in *seconds since epoch* (Unix time).
// But JavaScript's Date constructor expects *milliseconds* since epoch.
// So you must multiply by 1000 when converting.

// Example exp value from jwt.io:
const exp = 1516239022; // seconds

// Convert correctly:
const time = new Date(exp * 1000); // multiply by 1000 → ms

console.log(time.toString());
// → Mon Jan 18 2018 00:30:22 GMT+0530 (India Standard Time)

// Breakdown:
// - new Date(exp) → wrong, interprets 1516239022 as ms → gives 1970 date.
// - new Date(exp * 1000) → correct, interprets as seconds → gives 2018 date.

// You can inspect parts:
console.log(time.getMinutes());     // local minutes
console.log(time.getUTCMinutes());  // UTC minutes

/*
JWT exp = Unix timestamp (seconds).
Backend verifies by comparing exp vs current time.
In JS, always multiply exp by 1000 before using Date().
*/
```

### homework

- what is csrf token ? why we need it ?
- when to use or when to not use -> CSRF token ?
- code implementation in server -> CSRF token ?
