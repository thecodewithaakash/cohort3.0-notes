/* 
### today agenda:
- Introduction to JavaScript - history, features, advantages, disadvantages, uses etc.
- browser console like log,warn,error,table etc.
- variables - decraration, initialization, assignment, re-assignment.
- let vs var vs const...
- arithmetic operators - +, -, *, /, %, ++, --, ** etc.
- data types - primitive and non-primitive , typeof operator etc..
- truthy and falsy values, type conversion, type coercion, equality operators etc.
- alert,prompt, confirm, template literals, string interpolation etc. 
*/

// Browser console is REPL(Read Evaluate Print Loop) environment

// console.log(a); // reference error: a is not defined

// javascript is dynamically typed interpreted language, so we can declare a variable without specifying its type..
// JavaScript is a strictly case-sensitive language.

/* 
### DataTypes 
- Premitive 
    - Number (10, 20.55, -10, 9999999999)
    
    - String ('h', 'sarthak', "Welcome to sheryians")
    - Boolean (true, false)
    - undefined (variable is delared but not initialized then default value assigned by JS engine is "undefined")
    - null (nothing, can be used to intentionally make variable empty)
        - null is primitive value that represents the intentional absence of any object value.
        -  It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
    - BigInt (number's range is 2^53-1 and beyond that is BigInt)
    - Symbol (unique & immutable values)

- Non-Premitive (Reference)
    - Array 
    - Objects 
    - Function 

*/

// var a = 1000000000000000000000000000000n;
// console.log(typeof a); // bigint

// var s1 = Symbol("s1");
// var s2 = Symbol("s1");

// console.log(s1 == s2);
// console.log(s1 === s2);

// let res = alert("Welcome to Sheryians"); // alert is used to show a message to the user in a popup box
// console.log(res); // undefined is returned because alert does not return any value

// let res = confirm("Are you sure you want to delete this file?"); // confirm is used to show a message to the user in a popup box with two buttons OK and Cancel
// console.log(res); // true if user clicks OK and false if user clicks Cancel

// let userName = prompt("Please enter your name: "); // prompt is used to show a message to the user in a popup box with an input field and two buttons OK and Cancel
// console.log(userName); // if user clicks OK then the value entered in the input field is returned and if user clicks Cancel then null is returned
// console.log(typeof userName); // string is returned because prompt always returns a string value
// console.log("Hello, " + userName + "!"); // string concatenation

// ### string concatination
// var firstName = "Sarthak";
// var x = 10;

// console.log(a - firstName); // NaN (Not a Number) is returned because we are trying to subtract a string from a number

// var a = "10";
// var b = 20;
// console.log(a + b); // 1020 is returned because we are trying to add a string and a number, so the number is converted to a string and concatenated with the first string

// let x = 'Aakash';
// let y = 'saha';
// console.log(x + y); // Aakashsaha is returned because we are trying to add two strings, so they are concatenated

// let num1 = prompt("Enter num1");
// let num2 = prompt("Enter num2");

// // console.log(num1 + num2); // string + string = string(concatenation)
// console.log(num1 - num2); 


// let a = "10";
// let b = "20";
// console.log(a + b);

// - so anything + string = string
// - even any arithmetic operation with string will result in string

// - '+' operator is used for both addition and concatenation, so it is called as overloaded operator
// - when '+' operator is used with string then it is used for concatenation and when it is used with number then it is used for addition

// ### String concatination flow:
// - string + string = string
// - string + number = string
// - number + string = string
// - number + number = number
// - boolean + string = string
// - boolean + number = number
// - boolean + boolean = number
// - null + string = string
// - null + number = number
// - null + boolean = number
// - undefined + string = string
// - undefined + number = NaN
// - undefined + boolean = NaN
// - undefined + null = NaN
// - undefined + undefined = NaN
// - null + null = 0

// ### Questions:
// - learn about programming cases like camelCase, PascalCase, snake_case, kebab-case etc ?
