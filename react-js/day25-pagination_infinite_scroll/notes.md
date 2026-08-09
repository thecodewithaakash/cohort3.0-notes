

### flow to learn pagination & infinite scroll
1. App.jsx : custom Pagination
2. TanStack.jsx : tanstack pagination
3. Infinite.jsx : Infinite load data


# 📖 Understanding Pagination Flow in React (with API calls)

## 🔹 Current Implementation
- You’re using `page` state and `limit` to fetch products from the API.  
- On every **page change** (`Next` or `Prev`), the API is triggered via `useEffect`.  
- Data is stored in `products` state and rendered in the UI.  

👉 This is a **basic server‑side pagination** approach.

---

## 🔹 How It Works
1. **Next button** → increases `page`, triggers API → fetches new data.  
2. **Prev button** → decreases `page`, triggers API again → fetches previous data.  
3. **totalPages** → calculated from API response (`products.total / limit`).  
4. **Rendering** → only current page’s products are shown.  

---

## 🔹 Drawbacks
1. **Repeated API calls**  
   - Every time you click **Next** or **Prev**, the API is called again.  
   - Even if you already fetched that page before, it doesn’t reuse cached data.  

2. **Unnecessary network usage**  
   - If a user navigates back and forth between pages, the same data is fetched multiple times.  
   - This increases **latency** and **bandwidth usage**.  

3. **User experience issues**  
   - Each navigation causes a loading delay.  
   - If API is slow, the UI feels sluggish.  

4. **Scalability problem**  
   - For large datasets, repeated calls can overload the backend.  
   - Not optimized for high‑traffic apps.  

---

## 🔹 Optimized Approach
Instead of calling the API every time:

1. **Cache results in state**  
   - Store fetched pages in a dictionary (e.g., `{page: data}`).  
   - If user clicks **Prev**, load from cache instead of calling API.  

   ```javascript
   const [cache, setCache] = useState({});

   const getAllProducts = async () => {
     if (cache[page]) {
       setProducts(cache[page]); // use cached data
       return;
     }
     let res = await axios.get(
       `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
     );
     setProducts(res.data);
     setCache({ ...cache, [page]: res.data }); // save to cache
   };
   ```

2. **Prefetch next page**  
   - When user loads page `n`, you can silently fetch page `n+1` in the background.  
   - This makes **Next button instant**.  

3. **Hybrid approach**  
   - Use **server‑side pagination** for large datasets.  
   - Use **client‑side caching/prefetching** for smoother UX.  

---

## 🔹 Performance Notes
- **Current flow** → simple but inefficient (API on every navigation).  
- **Optimized flow** → reduces redundant calls, improves speed, and scales better.  
- Trade‑off: caching increases memory usage, but for small/medium datasets it’s worth it.  

---

## ✨ Final Takeaway
- Your current implementation works but **re‑fetches data unnecessarily**.  
- Best practice: **cache pages + prefetch next page** → avoids repeated API calls, improves performance, and gives a smoother user experience.  

