### Agenda

- Why TypeScript
- Installation
- tsconfig.json

# 📘 TypeScript Essentials

- **TypeScript is a Superset of JavaScript**
- it's just a static type system for javascript which runs on a top of JavaScript.
- Adds a **static type system** on top of JS
- **JavaScript = Earth** → the core foundation we live on.
- **TypeScript = Cloud around Earth** → adds extra layer of safety and structure.
- TS is a **superset of JS** → everything in JS works in TS.
- Provides a **static type system** → catches errors before runtime.
- TS compiles down to plain JS → browsers only understand JS.
- Think of TS as a **protective wrapper (cloud)** around JS (earth).

# 📘 JavaScript vs TypeScript

- **JavaScript (JS)** → Dynamically typed → prone to runtime type bugs/errors.
- **Production needs** → Safer, predictable code → requires static typing.
- **TypeScript (TS)** → Superset of JS with static type system.
- **Created by Microsoft** → Adds type safety, tooling, and scalability for large apps.

### Key Points / Rules

1. TS **never executes directly** → it compiles to JS
2. TS is a **superset of JS**
3. TS provide **static type checking system** for JS.
4. TS itself is **not a language, framework, library, or third‑party package** → it’s a typed layer on top of JS

- 👉 Only JavaScript executes in browsers — React and TypeScript must compile/transpile down to plain JS first.

### Why we need TypeScript in Production ?

# Case 1: 🏠 Pintu's Story ~ relate with JS
- **Pintu** → lives alone in a hut
- One day → goes to **Domino’s Pizza** to enjoy pizza
- Meanwhile → his hut catches **fire**
- The hut gets locked by a **tala (lock)**
- Result → Pintu loses his home while he is away

## Case 2: 🏗️ Story Analogy: JS vs TS

- **Pintu** wants to build his hut.
- He uses **JS = Banger Cement** → it works, but it’s basic and not fire‑resistant.
- He forgets to use **TS = Ultratech Cement** → stronger, adds fire resistance and safety.
- One day, while Pintu is away enjoying pizza at Domino’s, his hut catches fire.
- Because he only used JS (Banger Cement), the hut burns down.
- If he had used TS (Ultratech Cement), the hut would have been safer and more durable.

### 🔑 Relation to JavaScript & TypeScript

- **JavaScript (JS)** → like normal cement: builds the house, but no extra protection.
- **TypeScript (TS)** → like Ultratech cement: adds static type safety (fire resistance), preventing issues before they happen.
- **Lesson** → You can build with JS alone, but TS makes your project stronger, safer, and more reliable in production.

✨ One‑liner: _JS builds the hut, TS makes it fire‑resistant._

# Case 3: 🔥 JS vs TS Analogy (Pintu’s Story)

- **Pintu** builds his hut using **JavaScript (JS = normal cement)**.
- The hut works fine, but it has **no fire resistance**.
- He forgets to use **TypeScript (TS = Ultratech cement)**, which adds safety.

### Scenario

- One day, Pintu goes to **Domino’s Pizza** to enjoy.
- While he’s away, his hut catches **fire**.
- Because it was built only with JS, the hut burns down.
- If he had used TS (Ultratech cement), the hut would have been **fire‑resistant**.

### Alarm System Analogy

- **JS hut** → no alarm, no protection.
- **TS hut** → has a **fire alarm system**.
  - Alarm detects fire → triggers an **alert**.
  - Alert goes to Domino’s (monitoring system).
  - Pintu gets notified in time → he informs his neighbor → his hut stays **safe**.

### 🔑 Takeaway

- **JS** → builds the house, but fragile.
- **TS** → adds type safety (like fire resistance + alarms).
- In production, TS prevents disasters before runtime, just like Ultratech cement and alarms protect a hut from fire.

# 📦 Product Flow

- **Project → Development**
- **Software → Live on Google**
- \*_Product → Grab Audience_

# 🖥️ Development vs Production

- **Development Phase**
  - 1000+ files → project runs locally on Engineer's laptop
  - during development phase,Everything seems fine while coding

- **Production Phase (Live on Google)**
  - Once deployed → 1, 2, 3…100 users start using it
  - Real users begin noticing issues:
    - Bugs
    - Glitches
    - Fake screens
    - Errors

- Local development may look perfect, but in production real users expose hidden problems.

# ⚡ Dev vs Prod: JS vs TS

## 1) Development Phase (JS)

```js
let a = 90;
a = "90"; // allowed
a = true; // allowed
a = null; // allowed
```

- JS = dynamic typing → flexible but risky
- Works fine locally, no immediate errors

## 2) Production Phase (TS)

```ts
let a: number = 90;
a = "90"; // ❌ error
```

- TS = static typing → enforces type safety
- Prevents bugs before runtime, safer in production  
  👉 One‑liner: _JS allows anything, TS enforces rules to keep production safe._

- 👉 TypeScript adds static type checking, making the production pipeline stable and nearly bug‑free.

# ⚡ JS vs TS Workflow

1. **JS → Development → Project → ✓**
   - Buld projects locally with JavaScript
   - Works fine but lacks static types

2. **+ TS → Static Types**
   - TypeScript adds type safety
   - Prevents runtime bugs, stabilizes production

3. **Frameworks (React / Svelte / NextJS)**
   - Written in JS/TS
   - Ultimately **execute as JavaScript** in browsers

4. ⚙️ Compilation Flow
  - Source code (React / Next / Svelte / TS)
  - **TypeScript checks types → warns if errors**
  - You must fix errors first
  - Then → Compile → Run as plain JavaScript in browser
  - You write in TS/React/Svelte/Next, but browsers only execute plain JS after compilation.

# ⚡ TypeScript vs JavaScript
- **TypeScript (TS)**  
  → Superset of JavaScript  
  → Generates **static code** at compile time  
  → Errors caught **before runtime**

- but in **JavaScript (JS)**

```js
let a = "go";
a = 90; // allowed in dev
```

- Works in development - compile time (dynamic typing)
- At runtime → can cause errors, glitches, unstable behavior

### key points
- **Compile‑time (TS)** → catches mistakes early, prevents bad code from running
- **Runtime (JS)** → errors only show up when program executes
  👉 One‑liner: _TS catches errors at compile‑time, JS fails at runtime._

# ⚙️ JS vs TS: Compile & Runtime

## 1) Compile Time

- **JavaScript (JS)** → no type checks, errors only show during runtime
- **TypeScript (TS)** → static type checking,errors shown during development time(compile time)
  - TS warns on type mismatches before build
  - You must fix errors → only then compile → outputs JS

## 2) Runtime
- **JS** → runs directly, errors surface only when executed
- **TS** → after successful compile, runs as plain JS

### 🔑 Interview Takeaway
- **JS** → flexible, but runtime‑error prone
- **TS** → superset of JS, adds compile‑time safety
- **Result** → Stable production pipeline, fewer bugs, safer scaling
  👉 One‑liner: _TS catches errors at compile time, JS only fails at runtime._

- 👉 The browser parses HTML tags as strings, builds a DOM tree, and JavaScript executes by manipulating that DOM structure.

# ⚙️ Transpiler vs Compiler

## Transpiler

- **Definition** → Transforms one high‑level language (HLL) into another HLL or lower‑level language (LLL).
- Example:
  ```jsx
  <h1>Hello</h1>
  ```
  → Babel transpiles into:
  ```js
  React.createElement("h1", null, "Hello");
  ```
- **JSX → JS** using Babel.

## Compiler
- **Definition** → Converts source code into executable JavaScript.
- After transpilation, JS code is compiled and run in the browser.

### 🔑 Interview Takeaway
- **Transpiler (Babel)** → syntax sugar (JSX) → plain JS.
- **Compiler** → final JS → executes in runtime.

👉 One‑liner: _Babel transpiles JSX into JS, then the compiler produces runnable JavaScript._

# ⚙️ Transpilers vs Compilers

## Transpilers

- Convert code from one **high‑level language (HLL)** to another HLL.
- Examples:
  - **Babel** → JSX → JavaScript
  - **TypeScript (TS)** → TS → JavaScript
  - **BOM** (Browser Object Model transformations)

## Compilers

- Convert code from a **high‑level language (HLL)** into **low‑level language (LLL)** or machine code.
- Examples:
  - JavaScript
  - C / C++
  - Ruby
  - Rust

### 🔑 Interview Takeaway

- **Transpiler** → syntax transformation (e.g., JSX/TS → JS).
- **Compiler** → full translation into machine‑executable code.
- Transpilers reshape code into another HLL (JSX/TS → JS), while compilers translate HLL into machine‑ready instructions.

# ⚙️ Why Create a Package.json File?

- we have to install something

1. Make a folder (e.g., `typescript`)
2. Initialize → `npm init -y`
3. Install TS → `npm i typescript -D`
4. Generate config → `npx tsc --init` → creates `tsconfig.json`

## 🔍 JS vs TS Error Handling

- **JavaScript (JS)**
  - Runs directly no errors at **Compile time** → errors only appear at **runtime**

- **TypeScript (TS)**
  - Adds static type checking
  - Errors caught at **compile time** in editor (VSCode)
  - Must fix before compiling → outputs clean JS

# ⚙️ TypeScript Compilation Pipeline flow
1. **Source Code(typescript file ka code)**
   - Developer writes TS code (e.g., `let a:number = 90`)

2. **Lexer -> (Scanner(scan the whole code) + break it into chunks)**
   - Breaks code into tokens/chunks
   - Example: `let`, `a`, `:`, `number`, `=`, `90`

3. **Parser** ~ parse the code & build AST from tokens/chunks
   - Builds **AST (Abstract Syntax Tree)** from tokens
   - Represents code structure
   - Example AST:
     Variable
     ├─ let
     ├─ type : number
     ├─ operator : "="
     └─ value : 90

4. **Binder**
   - Connects identifiers → performs type binding
   - Ensures variables/types are linked correctly
   - ["let a:number = 90"]

5. **Checker ~ here Typescript act as "static type checking system"**
   - Validates types → catches errors at **compile time**
   - Example: assigning `'90'` to `a:number` → ❌ error

6. **Transformer**
   - Converts modern features (e.g., `async/await`) into compatible JS
   - Ensures old + new versions work together

7. **JS execute ~ Emit / Execute**
   - Outputs plain JavaScript
   - Browser executes JS → interacts with DOM/HTML
