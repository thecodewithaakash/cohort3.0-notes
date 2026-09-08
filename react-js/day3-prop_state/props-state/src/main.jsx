import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)

// createRoot(document.getElementById('root')).render(<App />)
// → Attaches the real DOM root element to React’s Fiber root,
//    which manages the Virtual DOM and reconciliation.


