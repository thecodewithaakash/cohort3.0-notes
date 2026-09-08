### 🔑 Bitwise Operators
- **`&` → AND** → 1 if *both bits are 1*  
- **`|` → OR** → 1 if *at least one bit is 1*  
- **`^` → XOR** → 1 if *bits are different*  
- **`~` → NOT** → flips all bits (0 → 1, 1 → 0)  
- **`<<` → Left shift** → shifts bits left (adds zeros on right)  
- **`>>` → Right shift** → shifts bits right (sign bit preserved)  
- **`>>>` → Unsigned right shift** → shifts bits right (fills with zeros)  

- *Bitwise ops work at the bit level — AND/OR/XOR combine, NOT flips, shifts move bits.*  

To know the **binary of any number**, you just need to convert it from **decimal → binary**.

### 🔑 Quick Methods

1. **Divide by 2 method**
   - Keep dividing the number by 2.
   - Write down the remainder (0 or 1) each time.
   - Read the remainders **bottom to top**.

   Example: `5`
   - 5 ÷ 2 = 2 remainder **1**
   - 2 ÷ 2 = 1 remainder **0**
   - 1 ÷ 2 = 0 remainder **1**  
     → Binary = **101**


2. **In JavaScript (or most languages)**

```js
let num = 5;
console.log(num.toString(2)); // "101"
```


3. **Shortcut memory**

- Powers of 2: 1, 2, 4, 8, 16, 32…
- Check which powers add up to your number.
  - Example: 13 = 8 + 4 + 1 → binary = **1101**

-  _Divide by 2 repeatedly or use `.toString(2)` to get binary._


### 🧮 Bitwise AND (`&`)
Rule: **1 & 1 = 1**, otherwise 0.

Now apply it bit by bit:

```
   a = 0101   (decimal 5)
   b = 0011   (decimal 3)
-------------------------
a & b = 0001   (decimal 1)
```

- Bit 1: `0 & 0 = 0`  
- Bit 2: `1 & 0 = 0`  
- Bit 3: `0 & 1 = 0`  
- Bit 4: `1 & 1 = 1`  

So the result is `0001` in binary, which equals **1** in decimal.

- *Bitwise AND keeps only the bits where both numbers have 1.*  


Got it 👍 Let’s apply **all bitwise operators** step‑by‑step using your example:

```js
let a = 5; // 0101
let b = 3; // 0011
```

---

### 🧮 Bitwise Operations

1. **AND (`&`)**
```
0101
0011
----
0001 → 1
```
✅ Keeps only common 1s.

---

2. **OR (`|`)**
```
0101
0011
----
0111 → 7
```
✅ At least one 1 → result bit = 1.

---

3. **XOR (`^`)**
```
0101
0011
----
0110 → 6
```
✅ 1 if bits are different.

---

4. **NOT (`~a`)**
```
~0101 → flips → ...1010
```
In 32‑bit signed JS → **-6**.  
✅ Flips all bits.

---

5. **Left Shift (`a << 1`)**
```
0101 → 1010 → 10
```
✅ Moves bits left, adds 0 on right.

---

6. **Right Shift (`a >> 1`)**
```
0101 → 0010 → 2
```
✅ Moves bits right, keeps sign.

---

7. **Unsigned Right Shift (`a >>> 1`)**
```
0101 → 0010 → 2
```
✅ Same as `>>` for positive numbers, but fills with 0s always.


*`&` keeps common 1s, `|` combines, `^` highlights differences, `~` flips, shifts move bits left/right.*  


To **master binary calculation patternwise**, think of it like learning multiplication tables — once you see the patterns, it becomes automatic.  


### 🔑 Core Patterns
1. **Binary is powers of 2**  
   - Place values: 1, 2, 4, 8, 16, 32…  
   - Each bit position = \(2^n\).  

2. **Addition in binary**  
   - 0 + 0 = 0  
   - 0 + 1 = 1  
   - 1 + 0 = 1  
   - 1 + 1 = 10 (carry 1, just like decimal addition)  

3. **Multiplication pattern**  
   - Binary multiply is like AND:  
     - 1 × 1 = 1  
     - Anything × 0 = 0  

4. **Shortcut conversions**  
   - Memorize 1–16 in binary (cheat‑sheet).  
   - Example:  
     - 1 → 0001  
     - 2 → 0010  
     - 3 → 0011  
     - 4 → 0100  
     - 5 → 0101  
     - … up to 16 → 10000  

5. **Bitwise operator patterns**  
   - `&` → like multiplication (only 1 if both are 1).  
   - `|` → like addition (1 if at least one is 1).  
   - `^` → highlights difference (1 if bits differ).  
   - `~` → flips all bits.  
   - Shifts → multiply/divide by 2.  



### ⚡ Practice Hack
- Take small numbers (1–16).  
- Write their binary.  
- Apply `&`, `|`, `^` side by side.  
- Notice the **repeatable truth table patterns**.  


👉 *Memorize powers of 2, practice addition with carry, and map bitwise ops to math patterns (AND = ×, OR = +, shifts = ×2/÷2).*  
