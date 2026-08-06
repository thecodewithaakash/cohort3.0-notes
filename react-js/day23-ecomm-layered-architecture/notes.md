# 🔑 Auth Flow (UI → API → Redux → Protected Features)

## **Login (UI)**

- User enters credentials → **API call** (`/auth/login`).
- Backend returns **accessToken + refreshToken**.
- **Frontend** saves `accessToken` in **localStorage**.
- **Redux dispatch** → update `authSlice` with token + user state.

## **Feature Control**

- Routes/features check **Redux auth state**.
- If token exists → allow access to **Protected features**.
- If invalid/missing → **deny access and redirect for -> Login/reigster**.

## **Reload / Hydration**

- On reload → **hydrateUser** runs.
- Reads token from **localStorage**.
- Calls **API GET** (`/auth/me`) with `Authorization: Bearer <token>` header.
- Backend verifies → returns user data.
- **Redux dispatch** → rehydrate auth state.

👉 In short: _UI login → API call → token saved → Redux updated → protected features unlocked; reload → hydrate with token → API verify → Redux rehydrate._

# ⚡ Redux Thunk
- Redux thunk is a middleware for outer action of redux which is used for synching API's calls with redux state.

## 🔹 Concept
- Redux Thunk → middleware for handling async logic in Redux.
- Acts as an **outer action** to sync APIs with Redux state.
- Lets you write **functions (thunks)** that dispatch actions after async work (like API calls).
- Common use case → API sync calls (login, register, fetch data).

## 🔑 Benefits ~ Why Use Thunk
1. Manage **loading state** easily.
2. **less/Reduce repetition** in API handling.
3. **better/Improve performance** with centralized async control.

## 🔄 Flow
- **Thunk function** → makes API request.
- On success/failure → **dispatch Redux actions**.
- **Redux state** updates accordingly.

👉 In short: _Redux Thunk bridges async API calls with Redux by dispatching actions after the API resolves, improving state management and performance._


**Q: What is Redux Thunk and why is it used?**  

**A:** *Redux Thunk is a middleware that allows writing async logic in Redux by treating functions as actions. It’s mainly used to sync API calls with Redux state. This helps manage loading states, reduces repetitive code, and improves performance by centralizing async handling.*  

👉 **Takeaway:** *Thunk bridges API calls with Redux, making state management cleaner and more efficient.*


# ⚙️ Redux & Redux Thunk
- Redux mein actions ko dispatch ke through hi call kr sakte hai ~ Flow: **UI → State → Reducers**.  
- redux thunk is a outer Action for synching API's calls with redux state to handle the promise states ~ For extra async logic → **UI → Action → extraReducers**.  

## **Redux**
- Uses **actions** to dispatch updates to the store.  
- **Reducers** handle how data is saved or modified in state.  
- Flow: **UI → State → Reducers**.  
- For extra async logic → **UI → Action → extraReducers**.  

## **Redux Thunk**
- Acts as an **outer action** for syncing APIs with Redux state.  
- Handles **promise states** (loading, success, error).  
- Bridges **API calls** and **Redux updates** smoothly.  


👉 In short: *Redux manages state via actions and reducers; Redux Thunk extends it to handle async API calls and promise states efficiently.*

## 🔹 Redux  
- Redux **use actions to dispatch** the state updates.  
- Reducers decide **how data save hota hai**.  
- Flow: **UI → State → Reducers**  
- For async/extra logic: **UI → Action → extraReducers**  

## 🔹 Redux Thunk  
- Redux Thunk ek **outer action** hai jo APIs ko Redux state ke saath **sync** karta hai.  
- Ye **promise status** (loading, success, error) handle karta hai.  
- Async API calls ko Redux ke saath smoothly connect karta hai.  

👉 Short mein: *Redux = state management via actions/reducers; Redux Thunk = async API sync + promise state handling.*


### **Q: What does “outer action of Redux Thunk” mean?**  
### **A:** *Redux Thunk creates async outer actions that handle API calls and manage promise states — typically expressed as **pending, fulfilled, or rejected**.*  

👉 **Takeaway:** *Thunk lets Redux handle async workflows by dispatching actions for each promise state.*

### final notes:
- redux thunk is a outer action for synching Api calls with redux state to handle promise states.
- Flow: **UI → State → Reducers**  
- For async/extra logic: **UI → Action(redux thunk) → extraReducers**  