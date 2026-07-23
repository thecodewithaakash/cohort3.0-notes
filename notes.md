
### Installation Guide
- npm create vite@7
- npm i tailwindcss @tailwindcss/vite

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* index.css */
@import "tailwindcss";

```

### most used dummy api's 
1. **JSONPlaceholder** — [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com?utm_source=chatgpt.com)
2. **DummyJSON** — [https://dummyjson.com](https://dummyjson.com?utm_source=chatgpt.com)
3. **Fake Store API** — [https://fakestoreapi.com](https://fakestoreapi.com?utm_source=chatgpt.com)
4. **ReqRes** — [https://reqres.in](https://reqres.in?utm_source=chatgpt.com)
5. **MockAPI** — [https://mockapi.io](https://mockapi.io?utm_source=chatgpt.com)
6. **rest countries**: [https://restcountries.com/]
7. https://dog.ceo/dog-api/
8. https://pokeapi.co/
9. https://freeapi.app/docs


I’m reviewing the React-related notes and project folders to pull out the most interview-relevant topics and summarize them clearly.

Read [](file:///c%3A/Aakash%20saha/cohort-3-notes/react-js)

Searched for regex `^#|^##|React|useState|useEffect|Context|Router|useRef|form|validation|localStorage|API|props|state` (`**/react-js/**/*.md`), 215 results

### Here are the most repeated and interview-important React questions from what you’ve learned:

1. What is React, and why is it used?
2. What is JSX, and how is it different from plain JavaScript?
3. What is the Virtual DOM, and why is it important?
4. What is the difference between props and state?
5. What is useState, and how does it work?
6. What is the difference between controlled and uncontrolled components?
7. What is useEffect, and when would you use it?
8. What are React Hooks? What are the rules of Hooks?
9. What is the Context API, and when should you use it?
10. What is React Router, and how does navigation work in React?
11. How do you fetch data from an API in React?
12. What is useRef, and where is it commonly used?
13. What is lifting state up in React?
14. How do you handle form validation in React?
15. What is the difference between state updates in React and direct mutation?


- how rendering & re-rendering works in react ?
- is re-rendering good or bad at large scale application ? if not then how to minimize re-rendering ? if yes then how & why ?
- when re-rendering trigger in react ? i mean how to know this given code will cause re-rendering ?
- how to identify which react code is synchronous or asynchronous in react and how it is 
- is context api state management or not ? 


- https://www.reactbits.dev/get-started/index
- react bricks
- particles.js
