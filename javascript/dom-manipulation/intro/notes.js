
// - DOM is web api,which helps in Html manipulation -> AKA Dom manipulation
// - DOM -> HTMl Manipulation
// - console.log is not part of core JavaScript; 
    // it's provided by the host environment (like browsers or Node.js). 
    // In browsers, console is a Web API object. 
    // In Node.js REPL (Read, Evaluate, Print, Loop), console is built-in for debugging.

// window.history.back();
// window.history.forward();

// console.log(window);
// console.log(window.document);
// console.log(document);

// - HTML --> Convert --> Object --> Javascript

/* 
1. console.log ---> Browser
2. DOM ---> Browser
    - document,events,dom API's
3. BOM ---> Browser
    - console API,History,navigator,window,location
4. Web Api ---> Browser
    - fetch,setTimeout,localStorage,web socket
5. JavaScript ---> v8 Engine
    - fundamentals of programming
    - variables
    - arrays, Objects,Promises
    - OOP - classes,constructor

### Browser Hierarchy
1. JavaScript Engine → Core language execution (ECMAScript).
2. Web APIs → Extra features provided by the browser (DOM, BOM, fetch, setTimeout, etc.).
    3. DOM (Document Object Model) → In‑memory tree representation of HTML/CSS.
    4. BOM (Browser Object Model) → Browser‑specific objects like window, location, history, navigator.

*/

/* 
### understanding how HTML converted into DOM TREE
    - Browser is Proportional to the server --> Browser = Server,
    - Browser ke pass HTML --> string format mein aata hai.
    - HTML(String) → Parsing(HTML parser) → Tokenization → DOM Tree
*/

/* 
### css styling to CSSOM(CSS Object model) Tree 
- CSS(string) → Parsing → CSSOM Tree
*/

// - note : DOM Tree + CSSOM Tree → Render Tree → Layout → Paint → Screen

/*
- render tree means --> "Visible html in browser", if we apply "display:none" in any one element in html file 
   then it will not visible is render tree but present in DOM TREE.

// display:none → removed from render tree, not visible, no space
// visibility:hidden → stays in render tree, invisible but still takes space

*/



// “In browsers, window is the global object representing the browser window, hosting all global variables, functions, and Web APIs.”
// - “The document object is part of the browser’s window and represents the DOM, giving access to and control over the HTML content of the page.”
// - DOM --> HTML
    // - “DOM is the in‑memory representation of an HTML document, allowing JavaScript to access and manipulate page structure, style, and content.”

// Don't blame on others to not achieve your Goals.