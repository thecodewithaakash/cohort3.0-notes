
// let a = 10000000000000000000000000000000000;
// console.log(a);
// console.log(typeof(a));

// bigInt
// let a = 10000000000000000000000000000000000n;
// console.log(a);
// console.log(typeof(a));

// var a = false;
// var b = 'Aakash';
// console.log(a + b); // falseAakash
// console.log(a - b); // NaN

// let num1 = prompt("Enter num1");
// let num2 = prompt("Enter num2");

// console.log(num1 + num2); // string + string = string(concatenation)
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// ### Type coercion:
// -  Type coercion is the automatic (implicit) or explicit conversion  of values from one data type to another, such as strings to numbers.

// 1. Automatic(Implicit type coercion:
// Implicit type coercion = JavaScript auto‑converts types, e.g., '10' + '20' → "1020" and '10' * '20' → 200.
//  when you add a number string like '10' '20'....

// var a = '10';
// var b = '20';

// console.log(a + b); // automatic(implicit type coercin) --> string + string = string(concatenation)
// console.log(a * b); // automatic(implicit type coercin) --> string * string = number
// console.log(b - a);

// var a = 'Akki';
// var b = '20';

// console.log(a - b); // NaN because not allowed for implicit type coercin
// - When non‑numeric strings are used in arithmetic, JavaScript’s coercion fails and returns NaN.

// var a = 'true';
// var b = 20;
// console.log(a * b); // NaN

// var a = 'true'; // non‑empty string, so it’s truthy.
// var b = 20;
// console.log(a && 10 > 6); //  true

// '+' operator serves two purposes:
// 1. String concatenation → '10' + '20' = "1020"
// 2. Numeric addition     → 10 + 20 = 30

// let a = '10';
// console.log(typeof(a));

// ### 2. Explicit(intentional) type coercion:
// - explicit type coercion is when you manually convert a value from one data type to another using built-in functions or methods.
// For example, you can use the Number() function to convert a string to a number.

// var a = '10';
// var b = '20';
// console.log(Number(a) + Number(b)); // 30

// let a = "ashu";
// let b = Number(a);
// console.log(b); // NaN because "ashu" cannot be converted to a number
// console.log(typeof(b));

// var a = 12;
// var b = String(a);
// console.log(b); // "12" because we have converted number into string
// console.log(typeof b);

// var a = prompt("enter first number"); // 10
// var b = prompt("enter second number"); // 20

// console.log(Number(a) + Number(b)); // 30 because we have converted string into number

// var a = Number(prompt("enter first number")); // 10
// var b = Number(prompt("enter second number")); // 20
// console.log(a + b); // 30 because we have converted string into number

// - JavaScript’s Automatic Semicolon Insertion (ASI) automatically inserts semicolons at certain line breaks when they’re omitted and required for valid syntax.

// ### Binary operators in Javascript: a mathematical operation performed on two operands.
// 1. Arithmetic operators -> +, -, *, /, %
// ### 2. Assignment operators -> =, +=, -=, *=, /=, %=

// var a = 10;
// a += 5; // BTS a += 5 -> a = a + 5
// a -= 2;
// a *= 2;
// a /= 2;
// a %= 3;
// console.log(a); // 15 because of assignment operator -> a = a + 5

// ### 3. Comparison operators -> ==, ===, !=, !==, >, <, >=, <=
// - comparison operators are used to compare two values and return a boolean value -> true or false

// var a = 10; // = is an assignment operator -> it assigns the value of 10 to the variable a
// var b = '10';
// console.log(a == b); // true because "==" only checks for value not for data type - loosely coupled
// console.log(a === b); // false because "===" checks for both value and data type - strictly coupled

// ### != vs !==
// !=   → Not equal (checks only value, ignores type)
// !==  → Strict not equal (checks both value and type)
// != is the loose inequality operator — it does type coercion before comparing.
// !== is the strict inequality operator — no type coercion, both value and type must differ.

// var a = 10;
// var b = '10';
// console.log(a != b); // false because "!=" only checks for value not for data type
// console.log(a !== b); // true because "!==" checks for both value and data type

// ### > vs >= and < vs <=

// > → Greater than
// >= → Greater than or equal to
// < → Less than
// <=  → Less than or equal to

// var a = 12;
// var b = '11';
// var b = 12
// console.log(a <= b); // <= : means a is less than or equal to b
// console.log(a >= b); // >= : means a is greater than or equal to b
// - comparison operators return boolean value -> true or false

// ### 4. Logical operators -> &&, ||, !
// - && → AND → true if both conditions are true
// - || → OR → true if at least one condition is true or both conditions are true
// - ! → NOT → flips the boolean value (true → false, false → true)

// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;

// console.log(a < b && c > d); // false because of logical AND operator -> both conditions should be true.
// console.log(a < b || c > d); // true because of logical OR operator -> atleast one condition should be true.
// console.log(!(a < b)); // false because of logical NOT operator -> it reverses the value -> true becomes false and false becomes true.

// true --> 1
// false --> 0
// comparison operators return boolean value -> true or false
// logical operators return boolean value -> true or false
// logical operators are used to combine multiple conditions and return a boolean value -> true or false

/*
- || (OR) truth table:
    - 0 || 0 → 0
    - 0 || 1 → 1
    - 1 || 0 → 1
    - 1 || 1 → 1
*/

// 🔑 Basic Logic Gates
// AND (&&) → Output = 1 only if both inputs are 1
// OR (||) → Output = 1 if at least one input is 1
// NOT (!) → Output = inverts input (0 → 1, 1 → 0)

/*
- && (AND) truth table:
    - 0 && 0 → 0
    - 0 && 1 → 0
    - 1 && 0 → 0
    - 1 && 1 → 1
*/

/*
- ! (NOT) truth table:
    - !0 → 1
    - !1 → 0
*/

/* 
### 🔑 Operator Analogies
- **`||` → OR → like `+`** → adds truth if at least one is true  
- **`&&` → AND → like `*`** → multiplies truth, only true if both are true  
- **`!` → NOT → reverse it** → flips the value (true ↔ false)  
- *OR acts like addition, AND acts like multiplication, NOT just reverses.*
*/

// ###  5. Bitwise operators -> &, |, ^, ~, <<, >>, >>>

// let a = 5; // 0101 in binary
// let b = 3; // 0011 in binary

// console.log(a & b); // 1 because of bitwise AND operator -> both bits should be 1
// console.log(a | b); // 7 because of bitwise OR operator -> atleast one bit should be 1
// console.log(a ^ b); // 6 because of bitwise XOR operator -> both bits should be different
// console.log(~a); // -6 because of bitwise NOT operator -> it negates the bits -> 0 becomes 1 and 1 becomes 0
// console.log(a << 1); // 10 because of bitwise left shift operator -> it shifts the bits to the left and fills the rightmost bits with 0
// console.log(a >> 1); // 2 because of bitwise right shift operator -> it shifts the bits to the right and fills the leftmost bits with 0
// console.log(a >>> 1); // 2 because of bitwise unsigned right shift operator -> it shifts the bits to the right and fills the leftmost bits with 0

// 6. String operators -> +, +=
// 7. Conditional (ternary) operator -> condition ? expression1 : expression2

// let age = 18;
// console.log(age >= 18 ? "You can vote!": "you can't vote!");

// ### 8. Increment and Decrement operators -> ++, --

// var a = 10;
// 1. post-increment -> first use the value of a and then increment it
// console.log(a++); // 10 because of post-increment -> first use the value of a and then increment it
// console.log(a); // 11

// a++; // post-increment -> first use the value of a and then increment it
// console.log(a);

// 2. pre-increment -> first increment the value of a and then use it
// console.log(++a); // 11 because of pre-increment -> first increment the value of a and then use it
// console.log(a);

// ++a; // pre-increment -> first increment the value of a and then use it
// console.log(a);

// 3. post-decrement -> first use the value of b and then decrement it
// var b = 20;
// console.log(b--); // 20 because of post-decrement -> first use the value of b and then decrement it
// console.log(b);

// b--; // post-decrement -> first use the value of b and then decrement it
// console.log(b); // 19

// 4. pre-decrement -> first decrement the value of b and then use it
// console.log(--b); // 19 because of pre-decrement -> first decrement the value of b and then use it
// console.log(b);

// --b; // pre-decrement -> first decrement the value of b and then use it
// console.log(b);

// - post means first use the value and then increment/decrement it
// - pre means first increment/decrement the value and then use it
// BTS -  a++ = a = a + 1
// - a++ => a = a + 1

// ### need to understand:
//  + -> Addition & string concatenation
//  - -> Subtraction
//  * -> Multiplication
//  / -> Division
//  % -> Modulus

// - if we perform operation with non-numeric data type then it will return NaN(not a number) ->  for (-,*,/,%) but except for addition because of string concatenation.

// ### Notes:
// ### to convert string into number we have 3 methods
// 1. Number() -> it can convert any datatype into number if possible otherwise it will return NaN
// 2. parseInt() -> it can convert string into number but it will ignore the decimal part and also ignore any character after space
// 3. parseFloat() -> it can convert string into number but it will ignore any character after space but it will not ignore the decimal part

/*
### questions:
- is string array or not? first principle ? 
- is semicolon necessary in javascript? first principle ? if not then why?
- real practical use case of increment and decrement operator? first principle ?
- = vs == vs === ? first principle ?
*/
