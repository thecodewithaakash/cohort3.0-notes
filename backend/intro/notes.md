
# ☁️ Cloud Basics
- **Internet** → Access layer, delivers cloud services globally  
- **Storage** → Data hosting, scalable & on‑demand (e.g., S3, Blob,Gmail --> 15GB)  
- **Communication (Server)** → Enables apps, APIs, messaging, collaboration  
- **Core idea** → Cloud = remote infrastructure for compute, storage, and networking, delivered via the internet
- Backend is proportional to server.

# 🍽 Backend as Restaurant
- **Customer (Frontend/UI)** → Places the order to the waiter.
- **Waiter (API/Request)** → Carries the order to kitchen 
- **Chef (Backend/Server)** → Prepares food (business logic, data processing)  
- **Pantry/Ingredients (Database)** → Stores raw materials (data)  
- **Waiter returns dish (Response)** → Sends result back to customer(serve the order to the customers)
- server is a machine(CPU/GPU)

# ⚡ Server Working (Req/Res + JSON)
- **Client → Request**: Browser/app sends HTTP request to server (often with JSON payload).  
- **Server → Process**: Backend logic runs, may query DB, apply rules.  
- **Server → Response**: Sends back data, usually in JSON format.  
- **JSON.stringify()**: Converts JS object → JSON string (for sending).  
- **JSON.parse()**: Converts JSON string → JS object (for reading).  
👉 Flow: *Client sends request → server processes → responds with JSON → client parses and uses data.*

- A server is a machine that receives client requests, processes them, and sends back responses.
- Browser is a client.

- **API = Interface** Acts as the communication bridge between **client (frontend/browser)** and **server (backend)**.  
- Internet access, storage, and server communication are powered by large‑scale data centers that host and deliver cloud services.
- A cloud provider is a company that delivers cloud services (compute, storage, networking) via data centers — e.g., AWS, Microsoft Azure, or Google Cloud.

# ⚡ CPU vs GPU 

- **CPU (Central Processing Unit)**  
  - Few powerful cores (4–16 typical)  
  - Optimized for sequential, complex, decision‑heavy tasks  
  - Acts as the general‑purpose “brain” of the computer"

- **GPU (Graphics Processing Unit)**  ~ NVIDIA
  - Thousands of lightweight cores  
  - Optimized for massive parallelism and repetitive calculations  
  - Excels at graphics rendering, AI/ML training, and high‑throughput workloads  

👉 One‑liner: *CPU is best for flexible sequential logic, while GPU is specialized for parallel computations at scale.*

# 🌐 Internet & Optic Cables
- **Internet Backbone** → Runs through high‑speed optic fiber cables.  
- **Optic Cables** → Carry data as light signals across continents and oceans.  
- **Data Centers** → Store, process, and deliver information globally.  
- **Tata Telecommunication** → Major provider in India, builds and manages optic cable networks and international connectivity.  

👉 One‑liner: *Global internet relies on optic fiber cables, with providers like Tata Telecommunication powering connectivity.*

# 📡 Towers & Optic Cable Hub
- **Optic Cable Hub** → Carries high‑speed internet as light signals.  
- **Hub → Base Station** → Converts optic signals into electrical/radio signals.  
- **Cell Towers** → Broadcast these signals wirelessly to mobile devices.  
- **Backhaul Link** → Fiber/optic cables connect towers to the hub for continuous data flow.  
- Fiber hub → Tower → User device.
👉 One‑liner: *Cell towers fetch data via fiber backhaul from optic hubs, then transmit it wirelessly to users.*


# 🌐 Internet, Storage & Server
- **Internet → Path**: Provides the route for data transfer.  
- **Storage → Location**: Defines where data resides.  
- **Server → Operation**: Performs processing and executes tasks.  
👉 One‑liner: *Internet carries data, storage keeps it, server processes it.*

### Phases of internet
- Web 1.0: 1994–2007 (static, read‑only)  
- Web 2.0: 2007 onward (social, interactive) - read & write 
- Web 3.0: emerging (semantic + decentralized) - read,write,own
- Web 4.0: developing (AI‑driven intelligent web)

- web3.0: decentralize → tokenize → blockchain

- Node.js is a runtime environment for executing JavaScript on the server, not in the browser.
- Client(Frontend/Browser): JavaScript
- Server(Backend): Node.Js

# Node.js History
- 2008: Google released the V8 JavaScript engine.
- **2009** → Ryan Dahl introduces Node.js at JSConf EU (Berlin).  
  - Built on Google’s V8 engine, event‑driven, non‑blocking I/O.  

- **2010** → npm (Node Package Manager) launched.  
  - Revolutionized dependency management.  

- **2011** → Joyent sponsors Node.js; Windows support added via libuv.  

- **2012** → Ryan Dahl steps down; project leadership shifts.  

- **2014** → io.js fork created due to governance issues.  

- **2015** → Node.js Foundation formed; io.js merges back.  
  - Node.js 4.0 LTS released.  

- **2019** → Node.js 12 LTS (enterprise stability).  

- **2020s onward** → Continuous growth with ES modules, async/await, and strong ecosystem.

- We can configure a mobile or laptop to act as a server by running server software that processes requests and sends responses.

# ⚙️ Node.js Provides
- **Networks** → HTTP module for server/client communication  
- **File System** → Read/write files with `fs`  
- **OS Access** → System info & utilities via `os`  
👉 One‑liner: *Node.js gives built‑in modules for networking, file handling, and OS operations.*

### setup guide
- npm init -y
- npm i -g nodemon
- npx nodemon

# 🔌 Port, Server & RAM
- **Port** → A virtual endpoint number that lets a server listen for specific network traffic (e.g., HTTP → port 80, HTTPS → port 443).  
- **Why Needed** → Without ports, the server wouldn’t know which service/process should handle incoming requests.  
- **RAM** → Yes, required; server uses memory to store active processes, handle requests, and manage data efficiently.  
👉 One‑liner: *Port directs traffic to the right service; RAM powers the server’s ability to process requests.*
- There are 65,535 total ports (numbered 0–65535); about 62k+ are available for use, since some are reserved for system services.
  - HTTP → 80  
  - HTTPS → 443  
  - Custom apps → use high ports (1024–65535) to avoid conflicts.  

# 💻 Check IP in CMD: *Run `ipconfig` in CMD to see your IP address.*

- If a server never sends a response, the client keeps waiting and appears stuck — but it’s not an infinite loop; it’s a hanging request until timeout or connection close.