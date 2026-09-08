# var vs let vs const

The main differences between `var`, `let`, and `const` are **scope, hoisting, redeclaration, reassignment, and the Temporal Dead Zone (TDZ)**.

> **My default choice in modern JavaScript is `const`. I use `let` when reassignment is required, and generally avoid `var`.**

| Feature                   | `var`           | `let`             | `const`           |
| ------------------------- | --------------- | ----------------- | ----------------- |
| Scope                     | Function-scoped | Block-scoped      | Block-scoped      |
| Redeclaration             | ✅ Yes          | ❌ No             | ❌ No             |
| Reassignment              | ✅ Yes          | ✅ Yes            | ❌ No             |
| Hoisted                   | ✅ Yes          | ✅ Yes            | ✅ Yes            |
| Access before declaration | `undefined`     | ❌ ReferenceError | ❌ ReferenceError |
| TDZ                       | ❌ No           | ✅ Yes            | ✅ Yes            |

### 1\. Scope

`var` is **function-scoped**, while `let` and `const` are **block-scoped**.

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

This is one of the biggest reasons `let` and `const` are preferred in modern JavaScript.

### 2\. Redeclaration vs reassignment

With `var`, you can redeclare the same variable:

```
var x = 10;
var x = 20; // ✅
```

With `let`:

```
let x = 10;
let x = 20; // ❌ SyntaxError
x = 20;     // ✅
```

With `const`:

```
const x = 10;
const x = 20; // ❌
x = 20;       // ❌
```

So remember:

- **`let`** → can be reassigned.
- **`const`** → cannot be reassigned.
- **Neither `let` nor `const`** can be redeclared in the same scope.

### 3\. Hoisting and the Temporal Dead Zone

All three declarations are technically **hoisted**, but they behave differently.

```
console.log(a); // undefined
var a = 10;
```

`var` is hoisted and initialized with `undefined`.

But:

```
console.log(b); // ReferenceError
let b = 10;
```

and:

```
console.log(c); // ReferenceError
const c = 10;
```

`let` and `const` are hoisted but remain **uninitialized** until execution reaches their declaration. The period between entering the scope and reaching the declaration is called the **Temporal Dead Zone (TDZ)**.

### 4\. Important `const` interview trick

`const` does **not** make an object immutable. It prevents **reassignment of the variable binding**.

```
const user = {
  name: "John"
};

user.name = "Mike"; // ✅
```

But:

```
user = {}; // ❌ TypeError
```

The reference stored in `user` cannot be changed, but the object's properties can still be modified.

**Senior-level bonus:** `const` means **the binding is constant**, not necessarily that the referenced value is immutable. This distinction is a common follow-up question in JavaScript interviews.

### In a browser

```js
var a = 10;
let b = 20;
const c = 30;

console.log(window.a); // 10
console.log(window.b); // undefined
console.log(window.c); // undefined
```

When declared in the **global scope** of a classic browser script:

- `var` creates a property on the global `window` object.
- `let` and `const` do **not** become properties of `window`.
- `let` and `const` still have global lexical scope, but they are separate from the `window` object.

So:

```js
var name1 = "John";
console.log(window.name1); // "John"

let name2 = "Mike";
console.log(window.name2); // undefined
```

### Another important point: `var` is not always "global"

Consider:

```js
function test() {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ReferenceError
```

All three are local to the function here.

But inside a block:

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

This demonstrates the key distinction:

**`var` ignores ordinary block scope; `let` and `const` respect it.**

### Interview-friendly way to explain global scope

> "`var` can be function-scoped or global-scoped. If `var` is declared at the top level of a classic browser script, it becomes a property of the global `window` object. `let` and `const` can also be declared at the top level and are globally scoped in that script, but they don't become properties of `window`. And unlike `var`, `let` and `const` are block-scoped."

One caveat: **JavaScript modules (`<script type="module">`) behave differently**—top-level `var`, `let`, and `const` are module-scoped rather than becoming `window` properties.

"`var` is function-scoped, while `let` and `const` are block-scoped. `var` allows both redeclaration and reassignment, whereas `let` allows reassignment but cannot be redeclared in the same scope, and `const` allows neither reassignment nor redeclaration.

All three declarations are hoisted, but they behave differently. `var` is initialized with `undefined`, so accessing it before its declaration returns `undefined`. `let` and `const` are also hoisted, but they remain in the Temporal Dead Zone (TDZ) until their declaration is evaluated, so accessing them before declaration results in a `ReferenceError`.

When declared at the top level of a classic browser script, `var` also creates a property on the global `window` object, whereas top-level `let` and `const` do not. However, `let` and `const` are still globally scoped in that context.

In modern JavaScript, I generally use `const` by default, `let` when a variable needs to be reassigned, and avoid `var` unless I'm working with legacy code or there's a specific reason to use it."

### Best way to say it in an interview - final answer

> **"`var` is function-scoped and allows both redeclaration and reassignment. `let` and `const` are block-scoped and cannot be redeclared in the same scope. `let` allows reassignment, whereas `const` doesn't. All three are hoisted, but `var` is initialized as `undefined`, while `let` and `const` remain in the Temporal Dead Zone until their declaration is evaluated. In modern JavaScript, I generally prefer `const` by default, use `let` when a value needs to change, and avoid `var` unless there's a specific legacy-code reason."**

- var is function-scoped, allows redeclaration and reassignment, and is hoisted and initialized with undefined. Therefore, accessing a var variable before its declaration returns "undefined". now let is a block scoped, let allows reassignment but not allowed redeclaration and "const" are also block scoped that not allows both redeclaration and reassignment. `let` and `const` are hoisted but remain **uninitialized** until execution reaches their declaration. The period between entering the scope and reaching the declaration is called the **Temporal Dead Zone (TDZ)**. so if we try to access "let" & "const" value before initialization we will get reference error.


