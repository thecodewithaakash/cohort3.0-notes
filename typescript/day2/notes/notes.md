# 📘 TypeScript vs JavaScript

- **TypeScript** → Superset of JavaScript
- Purpose → Adds **static typing** to JavaScript
- **JavaScript** → Dynamically typed (flexible but error‑prone long term)
- **TypeScript** → Safer, more maintainable for large projects

# ⚙️ TypeScript Compilation Flow

- **TS itself never runs** → browsers only execute JavaScript
- **Source Code**  
  ↓
- **Lexer** → Scans code → Tokens  
  ↓
- **Parser** → Builds **AST (Abstract Syntax Tree)**  
  ↓
- **Binder** → Connects identifiers & scopes (AST -> tree nodes)  
  ↓
- **Checker** → Performs type checks, reports errors  
  ↓
- **Transformer** → Converts modern TS/JS → compatible JS  
  ↓
- **Emit** → Outputs plain JavaScript  
  ↓
- **Browser executes JS**

- note: **TypeScript adds compile‑time safety, but the final output is always JavaScript that browsers run.**
- TypeScript compiles to JavaScript with type checks at compile time; the browser never runs TypeScript directly.

# 📘 Why TypeScript?

- Ensures **errors are caught earlier** during development
- Adds **type safety** → reduces hidden bugs
- Especially valuable for **large products/projects**
- Improves **maintainability, reliability, and team collaboration**

### Installation guide

- npm init -y
- npm i -D typescript
- npx tsc --init
- add script inside package.json: "scripts": {"dev": "nodemon --exec tsx index.ts"}
  - npm i -g nodemon // nodemonitor for automatic flow like HMR(hot module replacement) or `node index.ts`
- npm i -D tsx

### watchman for typescript

- npx tsc -w // auto‑compile TypeScript on file changes.

# 🔎 Type Inference in TypeScript

- TS infers variable type from **initial assignment**
- Reassigning a different type → **compile‑time error**
- ex: - TypeScript infers x as number from the initial assignment. - Reassigning a string causes a compile‑time error.

```ts
let x = 1; // inferred as number
x = "Aakash"; // ❌ Error: Type 'string' not assignable to type 'number'
console.log(x);
```

# ✍️ Annotation in TypeScript

- **Annotation** → Explicitly define datatype for a variable
- Example:

```ts
let age: number = 25; // number annotation
let name: string = "Aakash"; // string annotation
```

- **Annotation = manually telling TS the variable’s type.**

### 🔎 Inference vs Annotation (TS)

- **Inference** → Sabse pehli baar, jo data aap pass karoge uska **datatype compiler khud assign karega**
- **Annotation** → Datatype **hum manually provide karte hain**

# ❓ Is `null` a primitive in TypeScript?

- **Yes** → `null` is considered a **primitive type** in TypeScript (along with string, number, boolean, bigint, symbol, undefined).
- But → By default, `null` is only assignable to `any` and `unknown` (or to `null` itself) unless you enable **strictNullChecks**.

- note: **null Represents an intentional absence of value**

# ⚡ TS Compiler in Go

- Originally written in TypeScript
- From **TS 7.0**, compiler is **rewritten in Go**
- Reason → Faster compilation, lower memory, single native binary

# 🔎 Any vs Unknown vs Never (TS)

- **Any** → Kuch bhi do, sab chalega
- **Unknown** → Kuch bhi do, par update karte waqt dikkat hogi.
- **Never** → Kuch bhi nahi aana chahiye (no value possible)

# 🔎 Any vs Unknown vs Never (TS)

- **Any** → Accepts any value, no type safety
- **Unknown** → Accepts any value, but must be type‑checked before use/updating(performing any operation)..
- **Never** → Represents values that should never occur (e.g., unreachable code)

# 🚫 Why not use `any` in TS?

- **No type safety** → defeats TypeScript’s purpose
- **Runtime errors** → issues caught late, not at compile‑time
- **Harder maintenance** → unclear contracts between functions
- **Preferred alternatives** → `unknown` (safer, requires checks) or proper type annotations

# ⚡ Real Use Case of `never`

- **Exhaustive type checking** in unions:

```ts
type Shape = "circle" | "square";

function area(shape: Shape): number {
  if (shape === "circle") return 3.14;
  if (shape === "square") return 4;

  // If a new type is added later, compiler error here
  const _exhaustiveCheck: never = shape;
  return _exhaustiveCheck;
}
```

# ⚡ Real Use Case of `never`

- Example: Once a post is **deleted**, you can’t perform CRUD (Create, Read, Update, Delete) on it anymore.
- In TypeScript, `never` represents this **impossible state** — code paths that should never be reached.
- Used in exhaustive checks to ensure no invalid case slips through.

### 📚 Arrays in TS

- **Definition** → Ordered collection of elements of same type
- **Syntax** → `let nums: number[] = [1, 2, 3];`
- **Generic form** → `Array<string> = ["a", "b"];`

### 🎯 Tuples in TS

- **Definition** → Fixed‑length array with known types at each position
- Example:

```ts
let user: [string, number] = ["Aakash", 21];
```

# 🔗 Union Types in TS

- **Definition** → A variable can hold values of multiple specified types
- **Syntax** → `let id: string | number;`
- **Example**:

```ts
function printId(id: string | number) {
  console.log(id);
}
```

# 🎯 Literal Types in TS
- **Definition** → Restrict a variable to exact values, not just types
- **Syntax** → `let direction: "up" | "down";`
- **Example**:
```ts
  type Status = "success" | "error" | "loading";
  let s: Status = "success"; // only these values allowed
```

