

# ⚡ Vite React App Startup Flow

## 1. `npm run dev`
- Runs the script defined in **package.json** → usually `"vite"`.  
- Starts the **Vite development server**.

## 2. Vite Dev Server
- Serves **index.html** as the entry point.  
- Injects HMR (Hot Module Replacement) client for live updates.

## 3. `index.html`
- Contains `<div id="root"></div>` for React to mount.  
- Loads `src/main.jsx` via `<script type="module">`.

## 4. `src/main.jsx`
- Calls `ReactDOM.createRoot(document.getElementById("root")).render(<App />)`.  
- React builds the **Virtual DOM tree** from components.

## 5. Virtual DOM & Reconciliation
- React compares Virtual DOM with the real DOM.  
- Updates only the parts that changed (efficient rendering).

## 6. HMR (Hot Module Replacement)
- Vite + React refresh components instantly when code changes.  
- Preserves state where possible.  
- Avoids full page reload → faster developer feedback loop.

👉 This sequence is the **correct mental model**:  
**package.json → Vite dev server → index.html → main.jsx → Virtual DOM → reconciliation → HMR.**


### understanding props & state

- “A functional component is a plain JavaScript function that returns JSX, used to render UI in React.”
- JSX: JavaScript XML
    - Babel is transpiler which transpile jsx code in jsx function call.

- components: lego blocks, functional components
    - components is just a function which is called as JSX(XML).
- props is not proportional to arguments because:
    - Props are not the same as function arguments.
    -  Arguments map directly to parameters in a function call,
    - but in React, props are passed as an object inside
    - React.createElement(type, { props }, children).
- by default props is a blank Object.


- rafce: jsx component boilerplate shortcut
- tsrafc or tsrafce: tsx component boilerplate shortcut


- “JSX is transpiled by Babel into React.createElement calls. React uses those calls to build Virtual DOM objects, which the Fiber reconciler then compares and efficiently updates in the real DOM.” ? but how ?? deep dive later

- Javascript have so many scopes:
    - Global scope(sirf kehne ke liye global scope hota hai - check below explanation)
    - function scope
    - Block scope
    - Scope chain
    - Shadowing

-  Global scope exists at the top level,but when a script executes it’s wrapped in its own scope,
     pushed onto the call stack, and managed like a function context.

- “Global scope is the top‑level environment, but each script runs in its own execution context that’s placed on the call stack, similar to a function scope.

```js
// global scope 
let a = 10;

function sum(){
    // function scope
    let a = 20;
    let b = 100;
    return a + b;
}

if(true){
    // block scope
}

```

- ```export default``` defines a default export, which can be imported in other files using any identifier name.” - act as Global export
    - means we can import globally with any identifier name.
    - In a single file, only one default export is allowed.


- export {componentName}: Named Export
    - export {} → defines named exports,
    - which must be imported using the same identifier name.
    - Unlike default export, you can have multiple named exports in one file.
    - Each import must match the exported name exactly.
