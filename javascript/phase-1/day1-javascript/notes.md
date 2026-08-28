
👉 In the early 1990s, Tim Berners‑Lee created the core web technologies — HTML, HTTP, URLs, and the first web server.
- first website in the world - https://info.cern.ch/
- first browser created by tim berners lee - WWW(World wide web) in 1990s.
- Mosaic was developed earlier at NCSA, not by Netscape. Netscape built Navigator, which popularized JavaScript.
- Brendan Eich created JavaScript in 10 days (first called Mocha), and Netscape later integrated it into their browser Netscape Navigator — not Mosaic.
👉 Mocha was renamed LiveScript, and then rebranded as JavaScript by Netscape to ride on Java’s rising popularity in the 1990s.
- Mocha --> LiveScript --> JavaScript
- To compete, Microsoft launched its browser Internet Explorer and introduced JScript — a reverse‑engineered version of JavaScript.
- Microsoft launched Internet Explorer with JScript (a reverse‑engineered JavaScript), leading to incompatibilities — so Netscape submitted JavaScript to ECMA for standardization, resulting in ECMAScript.

- 👉 In the 1990s, Tim Berners‑Lee created the web’s core (HTML, HTTP, URLs, server). Netscape built Navigator and Brendan Eich developed JavaScript in 10 days (first Mocha → LiveScript → JavaScript, renamed to ride Java’s popularity). Microsoft countered with Internet Explorer and JScript, causing incompatibilities. To resolve this, Netscape submitted JavaScript to ECMA, leading to the ECMAScript standard. Netscape was later acquired by AOL, and its open‑sourced code gave rise to Mozilla, which eventually created Firefox.

-  Google released the V8 JavaScript engine in 2008, introducing just‑in‑time compilation to machine code and revolutionizing JS performance — powering Chrome, Node.js, and modern runtimes.

- **Chrome / Edge / Opera / Brave / Vivaldi / Samsung Internet** → **V8**  
- **Safari (Apple)** → **JavaScriptCore**  
- **Firefox / Tor** → **SpiderMonkey**  
- **DuckDuckGo Browser** → **JavaScriptCore (iOS/macOS), V8 (Android)**  

-  Ryan Dahl created Node.js in 2009, using Google’s V8 engine to run JavaScript on servers; by making it open‑source, it quickly gained massive popularity and remains widely used today.

### 📌 V8 engine evalution
1. **2008 – V8 Engine (Google)**  
   - Written in **C++**, introduced **JIT compilation** → JavaScript runs at native machine speed.  
   - Initially built for **Chrome browser**, later reused in other runtimes.  

2. **2009 – Node.js (Ryan Dahl)**  
   - Took **V8** out of the browser, wrapped it with **C++ bindings** + **libuv** (event loop).  
   - Enabled **JavaScript on servers** (non‑blocking I/O, async programming).  
   - Released as **open source**, quickly adopted → npm ecosystem exploded.  

3. **Runtime Concept**  
   - **Browser Runtime** → HTML/CSS + JS + DOM APIs (client‑side).  
   - **Node.js Runtime** → JS + V8 + C++ bindings + OS APIs (server‑side).  
   - Both rely on **V8** for execution, but expose different environments.  

👉 *Google built the V8 engine in 2008 (C++ + JIT), and Ryan Dahl used it in 2009 to create Node.js — an open‑source runtime that brought JavaScript to servers, making it massively popular.*  

- JavaScript is a single threaded, asynchronous programming language.

### 📌 JavaScript Scope & Uses
- **Frontend** → DOM, UI, interactivity  
- **Backend** → Node.js, Express  
- **Libraries/Frameworks** → React, Angular, Vue, Express  
- **Mobile Apps** → React Native, Ionic  
- **Desktop Apps** → Electron (VS Code, Slack)  
- **Robotics/IoT** → Johnny‑Five, NodeBots  
- **DApps / Blockchain** → Web3.js, Ether.js  
 
👉 *JavaScript powers everything — frontend, backend, mobile, desktop, robotics, and even decentralized apps — making it the most versatile programming language today.


### 📌 Client–Server Model (SEO vs Load Factor)
- **Client Side (Browser)** → Renders HTML/CSS/JS, gives **better load factor** (fast UI, less server strain).  
- **Server Side (Backend)** → Handles logic, DB, returns pre‑rendered content → **better for SEO** (search engines crawl server‑rendered pages easily).  
- **Flow** → Client sends **request**, server processes and sends **response**.  
- **Performance & SEO** → Balance between fast client rendering and SEO‑friendly server rendering.  
  
👉 *Client‑side rendering improves load factor, while server‑side rendering is stronger for SEO — web apps balance both via request/response flow.*  

### 📌 SSR vs CSR
- **SSR (Server‑Side Rendering)** → HTML is rendered on the server, sent fully formed → **better SEO, faster first load**.  
- **CSR (Client‑Side Rendering)** → Browser downloads JS, builds DOM on client → **better interactivity, lighter server load**.  
- SSR boosts SEO and initial load speed, while CSR improves client performance and dynamic user experience.

- A server is a machine that accepts client requests, processes them, and sends back responses.


### questions:
- SSR vs CSR ? 