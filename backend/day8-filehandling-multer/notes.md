
### walkthrough basics
So far we built a **Notes app** where the **frontend sends JSON data** → backend processes it → CRUD operations happen.  
But when it comes to **files**, the flow is different:  

- **Frontend → Backend (JSON)** → works for structured data (notes, text, IDs).  
- **Frontend → Backend (File)** → cannot be sent directly as plain JSON.  
- Instead, files must be transferred using:
  - **Multipart/form‑data via API** (common in REST/Express apps).  
  - Or **FTP/File upload protocols** for raw file transfer.  

- *Frontend can send JSON directly for CRUD, but files need special handling (multipart/form‑data or FTP) — they can’t be pushed as plain JSON.*  
- *JSON is for structured data exchange, file transfer requires proper upload protocols.*  

- FTP: File transfer protocols


## 📘 File Upload Workflow (Frontend → Backend)

1. **Frontend (Client Application)**  
   - Files such as `.png`, `.jpeg`, `.pdf`, `.mp4` are sent using **multipart/form‑data**.  
   - JSON alone cannot carry binary file data, so a proper upload format is required.

2. **ExpressJS + Multer (Middleware Layer)**  
   - **Multer** intercepts the request, parses the file payload, and attaches it to `req.file` or `req.files`.  
   - Express routes then handle business logic (validation, naming, storage path).

3. **NodeJS + HTTP (Server Layer)**  
   - Node serves the API endpoints and manages file handling.  
   - Uploaded files can be returned, processed, or passed to storage systems.

4. **Storage / Transfer (Persistence Layer)**  
   - Files may be stored locally on disk, transferred via **FTP**, or uploaded to cloud storage (e.g., AWS S3, GCP, Azure Blob).  
   - This ensures persistence and accessibility beyond the immediate request.

- *Frontend sends files via multipart/form‑data → Multer parses uploads → Express/Node handles routes → backend stores files in disk, FTP, or cloud.*  


## 📘 Common Communication Protocols in Web Systems

1. **HTTP (HyperText Transfer Protocol)**  - accepts Text only
   - Primarily used for **textual/structured data exchange** (HTML, JSON, XML).  
   - Basis of REST APIs and standard web communication.  

2. **FTP (File Transfer Protocol)**  - accepts "Text + Media" only
   - Designed for **file transfer** (text + media).  
   - Often combined with backend frameworks (e.g., Express + Multer) to handle uploads/downloads.  

3. **SMTP (Simple Mail Transfer Protocol)**  - Text + Outer Communication + email delivery
   - Used for **email delivery** and outer communication.  
   - Integrates with services like Gmail, Outlook, or custom mail servers.  

4. **WebRTC (Web Real‑Time Communication)**  - Two way communication
   - Enables **two‑way, peer‑to‑peer communication** (voice, video, data channels).  
   - Common in video calls, live streaming, and collaborative apps.  

- *HTTP = text/data exchange, FTP = file transfer, SMTP = email communication, WebRTC = real‑time two‑way communication.*  


## 📘 Image Upload & Multipart Workflow

1. **Frontend (Client)**  
   - Sends an **image file** (e.g., `sunny.png`) using **multipart/form‑data**.  
   - JSON alone cannot carry binary data, so multipart is required.

2. **Multipart → various in parts --> Chunks of file --> process called "chunking"**  
   - Large files are split into **chunks** (smaller parts).  
   - Each chunk is transmitted sequentially to the backend.  
   - Random strings/IDs may be used to track and reassemble chunks.

3. **Path → API → Backend**  
   - The file travels through a defined **API endpoint** (e.g., `/upload`).  
   - Backend receives the chunks, validates them, and reconstructs the full file.  
   - File is stored in a secure path (e.g., `/system/private/images/sunny.png`).

4. **Backend Processing**  
   - Once reassembled, the backend can:  
     - Save the file locally.  
     - Forward it to cloud storage (AWS S3, GCP, etc.).  
     - Serve it back via HTTP or integrate with other services.

- *Image upload uses multipart/form‑data → file split into chunks → API routes deliver to backend → backend reconstructs and stores securely.*  

# multipart --> chunks --> random strings
    - *Multipart uploads break large files into chunks, each tagged with random strings/IDs so the backend can track, validate, and reassemble them correctly.*  
    - **Multipart** → format for file transfer.  
    - **Chunks** → smaller parts of big files.  
    - **Random strings** → unique identifiers to stitch chunks back together.  
    👉*Multipart = chunked transfer with random IDs for safe reassembly.*



## 📘 Chunked File Upload Flow

1. **Image/File (Frontend)**  
   - User selects an image (e.g., `Ra.One.png`).  
   - Sent via **multipart/form‑data** request.

2. **Multipart → Chunks**  
   - Large files are split into **smaller chunks**.  
   - Each chunk is tagged with **random strings/IDs** for identification.  
   - This ensures reliable transfer and reassembly.

3. **API → Backend**  
   - Chunks travel through an **upload API endpoint**.  
   - Backend receives them, validates order, and reconstructs the full file.  
   - File is stored in a **bucket/storage path** (e.g., `/bucket/images/raone.png`).

4. **Buffer (Optional)**  
   - Backend may use a **buffer** to temporarily hold chunks before merging.  
   - Once complete, the file is persisted in storage (local disk, cloud bucket, FTP).

- *Multipart uploads split files into chunks with random IDs → API delivers them → backend buffers and reassembles into the original file for storage.*  

## 📘 Internet Communication & Backend Flow (with Chunks)

1. **Frontend → Internet → Server → Backend**  
   - Normal requests (CRUD, APIs) send **JSON/text**.  
   - Backend processes and responds with structured data.  

2. **File Uploads (Multipart + Chunks)**  
   - When sending large files, the frontend uses **multipart/form‑data**.  
   - Files are split into **chunks**, each tagged with random IDs.  
   - Backend reassembles chunks into the original file and stores them securely.  

3. **Voice/Video Calls (Real‑Time)**  
   - Apps like WhatsApp use **WebRTC** for two‑way streaming.  
   - Audio/video streams are also broken into **packets (like chunks)**.  
   - Continuous delivery + reassembly ensures real‑time communication.  
   - **Latency** is critical — delays in chunk/packet delivery affect call quality.  

4. **Protocols in Play**  
   - **HTTP** → Text/JSON exchange (APIs, CRUD).  
   - **Multipart/Chunks** → File uploads.  
   - **WebRTC (packets/chunks)** → Real‑time voice/video.  
   - Backend servers handle routing, authentication, buffering, and storage.  

- *Whether JSON APIs, file uploads, or real‑time calls — data flows from frontend → internet → server → backend, and large payloads are always split into chunks/packets for reliable transfer and reassembly.*  


## 📘 Local → Frontend → Backend → Storage Flow

1. **Frontend (Local System)**  
   - User selects a file/image (e.g., `photo.png`).  
   - Frontend sends it via **multipart/form‑data** request to backend API (`/upload`).  

2. **Backend (Express + Multer)**  
   - **Multer middleware** parses the file and attaches it to `req.file`.  
   - Backend decides where to store it:  
     - **Local folder** → `/uploads/images/photo.png`  
     - **External storage** → AWS S3, GCP bucket, or FTP server.  

3. **Storage Layer**  
   - File is persisted either locally or in cloud storage.  
   - If storage isn’t configured, upload fails (your “X” case).  

- *Frontend sends file via multipart → backend parses with Multer → backend stores in local folder or external storage.*  

## 📘 File & Data Storage Options

1. **Multer (Middleware)**  
   - Handles file uploads in Express.  
   - Two storage modes:  
     - **Disk Storage** → saves files locally on server (`/uploads`).  
     - **Memory Storage** → keeps files in memory buffer (useful for direct upload to cloud).  

2. **Text/JSON Data**  
   - Stored in **MongoDB** as JSON documents.  
   - Ideal for CRUD operations on structured data.  

3. **Media Files (Images/Videos)**  
   - Stored in external services:  
     - **Cloudinary / ImageKit** → optimized image hosting/CDN.  
     - **AWS S3 bucket** → scalable cloud storage.  

- *Text data goes to MongoDB, media files go to cloud storage (Cloudinary/ImageKit/S3), and Multer handles uploads via disk or memory storage.*  


## 📘 Multer Disk Storage

`multer.diskStorage()` takes **two functions**:

1. **destination(req, file, cb)**  
   - Defines **where** the uploaded file will be stored (e.g., `uploads/`).  

2. **filename(req, file, cb)**  
   - Defines **how** the uploaded file will be named (e.g., keep original name or generate unique name).  


## 📘 Image Upload Flow (Concise)
- **Frontend → API** → user sends image via **multipart/form‑data**.  
- **Backend (Express + Multer)** → `req.file` carries file, callback (`cb`) handles error or success.  
- **Callback** → `cb(error)` if failed, `cb(null, data)` if successful.  
- **Path → Storage** → file saved in `"uploads/"` or forwarded to cloud storage.  

- *Frontend sends image → backend parses with Multer → callback handles error/success → file stored in uploads or cloud.*  


- **In JavaScript, when the key and value have the same name, you can use ES6 object property shorthand — just write the variable once, and it becomes both the key and the value.**  

- **Old way (pre‑ES6):**  
  ```js
  const name = "Aakash";
  const age = 21;
  const user = { name: name, age: age };
  console.log(user); // { name: "Aakash", age: 21 }
  ```

- **Shorthand (ES6+):**  
  ```js
  const name = "Aakash";
  const age = 21;
  const user = { name, age };
  console.log(user); // { name: "Aakash", age: 21 }
  ```

*If key and value are the same, use ES6 shorthand — `{name, age}` instead of `{name: name, age: age}`.* 

## 📘 File Upload Flow (Express + Multer)

1. **API Endpoint**  
   - Example: `POST /notes/`  
   - Frontend sends file via **multipart/form‑data**.

2. **Middleware (Multer)**  
   - `upload.single("image")` parses the file.  
   - File available as `req.file`.  
   - Other fields available as `req.body`.

3. **Storage Configuration**  
   - `multer.diskStorage({ destination, filename })`  
     - **destination** → defines folder (e.g., `"uploads/"`).  
     - **filename** → defines naming logic (`Date.now() + originalname`).  

4. **Security Middleware**  
   - Add checks for file type, size, and authentication before saving.  

5. **Storage Options**  
   - **Disk Storage (DS)** → saves locally in `/uploads`.  
   - **Memory Storage (MS)** → keeps file in buffer, then forward to cloud (e.g., S3, Cloudinary).  

*File upload flow = API endpoint → Multer middleware → storage config (disk or memory) → file saved locally or sent to cloud.*  


## 📘 File Upload Flow (Concise)

- **Frontend** → sends file to `/file` or `/notes` API via `multipart/form-data`.  
- **Middleware** → `upload.single("image")` runs before the route handler.  
- **Multer DiskStorage** → receives file, applies:  
  - `destination(req, file, cb)` → defines folder (`uploads/`).  
  - `filename(req, file, cb)` → defines naming (`Date.now() + originalname`).  
- **Result** → file stored in `/uploads` with unique name, accessible in `req.file`.
 
- *Frontend posts to `/file` → Multer middleware `upload.single("image")` → diskStorage saves file using destination + filename.*  

- multer.memoryStorage() stores uploaded files in RAM as buffers (chunks), useful for directly streaming to cloud services instead of saving locally.
- A buffer is a temporary memory area that holds raw data (chunks) while it’s being transferred between processes or devices.