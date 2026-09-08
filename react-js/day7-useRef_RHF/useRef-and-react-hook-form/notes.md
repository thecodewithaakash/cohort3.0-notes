
### Learning Notes

- Installation steps:
  - npm create vite@7 or npm create vite@latest

1. Tailwind install setup
- npm install tailwindcss @tailwindcss/vite

```jsx
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwind()],
})

```

```css
/* index.css */
@import "tailwindcss";
```


- in react, always try reduce re-rendering to improve performance 


### Questions ?
- why react keep "strictMode" by default ? why we need it