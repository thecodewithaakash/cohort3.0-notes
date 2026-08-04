
## Path 1: **8 months using AI → Software**
- Focus: leveraging AI tools to accelerate software creation.  
- Outcomes:
  - Faster prototyping and iteration cycles.  
  - Automation of repetitive tasks (testing, code generation, documentation).  
  - AI‑driven insights for design and architecture decisions.  
- Strength: speed and efficiency, but requires structured practices to remain maintainable.


## Path 2: **8 months → Project**
- Focus: traditional project development without heavy AI reliance.  
- Outcomes:
  - Clear milestones and deliverables.  
  - Human‑driven decision making.  
  - Strong emphasis on collaboration and teamwork.  
- Strength: builds discipline and collaboration culture, but progress may be slower compared to AI‑assisted workflows.


## Common Success Factors
- **Collaborations** → shared knowledge, teamwork, collective problem‑solving.  
- **Structured Path** → organized workflow with defined stages (planning → execution → testing → deployment).  
- **Maintainable** → code and architecture designed for long‑term use, easier debugging and scaling.  
- **Sustainable** → practices that avoid burnout and reduce technical debt.  
- **Readable** → clean code and clear documentation for onboarding and future growth.


# 🏗️ System Architecture Notes

## 🔹 Overview

- A system can be divided into:
  - **Frontend**
  - **Backend**
  - **Collaborative part**
  - **Environment part**


## 🎨 Frontend Architecture

- **Component-Based Architecture**
- **4 layer feature-based Architecture**
- **Mono Repo** Architecture

### 📚 4 layer feature-based Architecture

1. **Presentation Layer → UI**
   - Components
2. **Business Logic Layer → Hooks**
3. **Data fetching/managing layer(Backend Logic Layer) → API**
   - Common data fetching for UI calls
4. **Data Managing Layer → State**


## 1. **UI**
- Built with **components**.  
- *Layouts* were considered but crossed out → focus is on component‑driven UI.

## 2. **Hooks**
- Core **logic layer**.  
- Most of the JavaScript code resides here.  
- Handles data fetching, transformations, and reusable logic.


## 3. **API**
- Responsible for communication with **backend/server**.  
- Used **only for API calls** (fetching or sending data).  
- Acts as the bridge between frontend logic and backend services.


## 4. **State Management**
  - **Context API / GSM → Redux**  
  - **Zustand** (underlined → preferred choice)  
  - **Jotai** (crossed out → not chosen)  
- Purpose: manage global state, ensure predictable data flow, and simplify updates across components.

- **note**:  
    - **UI (components)** → presentation  
    - **Hooks (logic)** → business logic  
    - **API (backend calls)** → data communication  
    - **State (Redux/Zustand)** → global state management  


## 🛒 E-commerce Features

1. Authentication (Auth)
2. Products
3. Cart
4. review
4. Checkout & Orders


## 📂 Folder Structure

```js
 // simple folder Architectture 
src/
 ├─ components
 ├─ hooks
 ├─ api
 ├─ constants
 ├─ utils
 ├─ pages
 ├─ styles
```

```js
// Complex Folder Architecture
src/
 ├─ features   // Feature-based 4-layer architecture
 │   ├─ Auth
 │   │   ├─ UI → components/Pages (LoginPage, RegisterPage)
 │   │   ├─ hooks → logic used in UI (react-hook-form, state hooks, etc.)
 │   │   ├─ api → API calls for login/register
 │   │   └─ state → authSlice for login/register
 │   ├─ Products
 │   │   ├─ UI → components/Pages
 │   │   ├─ hooks
 │   │   ├─ api
 │   │   └─ state
 │   ├─ Cart
 │   │   ├─ UI → components/Pages
 │   │   ├─ hooks
 │   │   ├─ api
 │   │   └─ state
 │   └─ Orders
 │       ├─ UI → components/Pages
 │       ├─ hooks
 │       ├─ api
 │       └─ state
 ├─ app
 │   ├─ layout
 │   ├─ store
 │   └─ context → Context API (if created)
 ├─ routes
 │   ├─ PR → Protected Routes
 │   ├─ NR → Nested Routes
 │   └─ AppRoutes.jsx
 ├─ config/    → API interceptors, environment configs
 ├─ shared/    → Reusable modules (UI, hooks, api, state)
 │   ├─ UI
 │   ├─ hooks
 │   ├─ api
 │   └─ state
 ├─ utils/     → Helper functions like JSON(stringify & parsing)
 ├─ services/  → External integrations (e.g., payment, notifications)
 └─ pages/     → Page-level components
```

## 🔑 Authentication Flow
  
- **Login / Register (UI actions)** → user submits credentials.  
- **APIs**  
  - **Login API** → validates user, returns token.  
  - **Register API** → creates new user, returns success message.  
- **API Call Flow**  
  - Triggered by submit with formData → handled via function (`fn()`).  
  - Response includes **token** (circled → key output).  
- **Redux Update**  
  - After API call → update Redux state (authSlice) for login/register.  
- **Final Output** → token stored in Redux, used for secure access and session management.

👉 *User action(login/signUp --> submitting with form data) → function executes(handleSubmit) →  API call  → token returned → Redux updated → secure authentication established.*



##  whole App flow ~ React Router + Redux Flow

### 🔹 Core Setup
- **React Router** → handles routing.  
- **Redux** → global state management.  
- **AppRoutes** → defines route structure.

### 🔑 Routes

1. Root (`'/'`)
- **Login** → UI page → connects to hooks.  
- **Register (reg)** → UI page → connects to hooks.  
- Both routes trigger **hooks** for logic (form handling, API calls, state updates).


2. Main (`'/main'`)
- **Home** 
- **Shop**
  - → **Product**
    - → **Comp** (component for product details).  
- **Cart**
  - → cart component.  
- **About** 
- **Profile**


3. 🔑 Flow Summary
- **React Router** defines paths.  
- **Redux** manages authentication and global state.  
- **AppRoutes** organizes routes into:
  - Root (`'/'`) → login/register.  
  - Main (`'/main'`) → app features (Home, Shop, Cart, About, Profile).  
- **Hooks** handle logic for login/register.  
- **Components** render UI for product, cart, etc.  

👉 *Routing flows from React Router → Redux → AppRoutes → individual pages (login/register at root, main features under `/main`).*  


## 📝 Register Flow (Earlier vs Now)

### **Earlier Flow**
1. Save form data in **useState**.  
2. Save data in **localStorage**.  
3. Dispatch **Redux** (authSlice) → update login/register state.  

### **Now Flow**
1. Save form data in **useState**.  
2. Make **API call (POST)** with that data.  
3. Dispatch **Redux** (authSlice) → update login/register state.  

- **Earlier:** LocalStorage was used for persistence before Redux.  
- **Now:** Direct API call replaces localStorage, ensuring real backend validation and secure token handling.  

👉 In short: *Earlier → useState → localStorage → Redux; Now → useState → API POST → Redux.*

- **Step 1:** Save form data in **useState**.  
- **Step 2:** Make **API call (POST)** with that data.  
- **Step 3:** On success → **dispatch Redux** (authSlice) to update login/register state.  
- **Final Output:** Redux holds updated auth state + token for secure session.

👉 *useState for form data → API call(POST) → Redux dispatch → authenticated state maintained.*

# 🔗 Connection of API Concept

### **Frontend**
- Frontend needs data to show --> so frontend send requests to the backend(server). 
  - **Data** → user input.  
  - **Frontend --> Requests (req)** → login, register,cart,products.  
  - **Backend --> Response (res)** → show results, check existence etc.. 

### **Backend**
- **Data** → stored/validated.  
- **Auth** → authentication layer.  
- **Endpoints** → login, register, Fetch Products, logout.  
- **Exist** → verify user/data existence.  

### 🔑 Flow
- **Frontend → API call → Backend**  
- Request (login/register/etc.) sent → backend processes → response returned → frontend shows result.  

👉 In short: *Frontend sends request → Backend handles auth/data → Response returned → UI updates.*

# 🔗 API Connection Flow

### **Frontend**
- Sends **req** (login, register, menu data, etc.).  
- **API call (POST/GET)** → passes user data.  
- **Frontend data bhej** → request payload.  
- Receives **res** → processed data shown in UI.  

### **Backend**
- Handles **auth** + business logic.  
- Endpoints: login, register, Fetch Products, logout.  
- Validates request, prepares response.  
- Connects to **DB** for persistence.  

### **Database (DB)**
- Stores raw data (menu, user info, etc.).  
- **Save** operations via backend.  
- **Get** operations → return data to backend → frontend.  

### **Flow**: 
- **Frontend → API call → Backend → DB → Backend → Frontend.**  
- Requests (req) go down, responses (res) come back up.  
- Ensures data is saved, fetched, and displayed securely.  

👉 In short: *Frontend sends data → Backend processes/authenticates → DB stores/fetches → Response returned → UI updates.*

# 🌐 HTTP Methods & REST APIs

### 🔹 Methods
1. **GET** → fetch data from server/backend.  
2. **POST** → send new data to the server.  
3. **PATCH / PUT** → update existing data.  
4. **DELETE** → remove data from database.  

### 🔹 REST APIs
- **REST** = *Representational State Transfer*.  
- Standard way for client ↔ server communication using HTTP methods.  
- Ensures stateless, scalable, and resource‑oriented interactions.  

👉 In short: *REST APIs use HTTP methods (GET, POST, PUT/PATCH, DELETE) to perform CRUD operations on server resources.*


# 🔑 Auth Flow (Frontend + Backend + Redux)

## **Login Flow**
1. **Frontend → API POST** `/auth/login` with credentials.  
2. **Backend** → validates user, returns `accessToken` + `refreshToken`.  
3. **Frontend** → save `accessToken` in **localStorage**.  
4. **Redux dispatch** → update `authSlice` with token + user state.  

### **Hydration (After Reload)**
1. **Frontend** → fetch token from **localStorage**.  
2. **API GET** `/auth/me` with `Authorization: Bearer <token>`.  
3. **Backend** → verifies token, returns user data.  
4. **Redux dispatch** → rehydrate auth state.  

### 🔑 Key Points
- **Earlier idea** → localStorage temporary check for existence.  
- **Now (code)** → proper **hydrateUser** API call ensures secure validation.  
- **AccessToken/RefreshToken** → central to session management.  
- **Redux** → keeps state consistent across reloads.  

👉 In short: *Login → save token → Redux update; Reload → hydrate with token → API verify → Redux rehydrate.*  

## **Q: Is localStorage a good place to store accessToken/refreshToken?**  
  -  Not really. Storing tokens in **localStorage** makes them accessible to JavaScript, which is vulnerable to **XSS attacks**. If malicious scripts run, they can steal tokens. The safer practice is to use **HTTP‑only, Secure cookies** with **SameSite** flags — these are not accessible via JavaScript and provide protection against both **XSS** and **CSRF**.  

  👉 **Takeaway:** *LocalStorage is convenient but insecure; best practice is HTTP‑only cookies for token storage.*

## **Q: What does "Bearer" mean in authorization headers?**  
  - *Bearer* is a token type used in the `Authorization` header of HTTP requests. It means the client is “bearing” (carrying) a token that proves identity. The server checks this token (usually a JWT or access token) to authorize the request.  

  👉 **Interview takeaway:** *Bearer = client presents a token in the header (`Authorization: Bearer <token>`) to access protected resources.*


