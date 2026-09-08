/* 
### what we learned in previous -> Phase 1:
- what and why Js
- console -> log,warn,error,info,table
- variables -> var, let, const
- data types -> primitive and non-primitive 
- operators -> arithmetic, assignment, comparison, logical
- if else statement
- switch case statement
- falsy and truthy values
- alerts, prompts and confirms
- useful strings and number methods
- is a string array ?
*/


// ### Synchronous flow of code
// console.log("if ke pehle");
// if(10 > 5){
//     console.log("If is running");
// }
// console.log("If ke baad me");


// ### loops 

// 1. While loop 

// let count = 0;
// while(count < 10){
//     console.log("count -->",count);
//     count++;
// }

// let count = 1;
// while(count <= 10){
//     console.log("count -->",count);
//     count++;
// }

// - reverse while loop
// let count = 10;
// while(count > 0){
//     console.log("count -->",count);
//     count--;
// }


// 2. for loop 
// for(let i = 0; i < 10; i++){
//     console.log("i -->",i);
// }

// for(let i = 1; i <= 10; i++){
//     console.log("i -->",i);
// }

// - reverse for loop
// for(let i = 10; i > 0; i--){
//     console.log("i -->",i);
// }

// for(let i = 10; i >= 0; i--){
//     console.log("i -->",i);
// }

// 3. do while loop

// let count = 0;
// do{
    // expression
//     console.log("count -->",count);
//     count++;
// }while(count < 10); // condition

// let count = 1;
// do{
//     console.log('count -->',count)
//     count = count + 1;
// }while(count <= 10)

// - Infinite loop happens when we forget to increment/decrement the loop variable.
// - Infinite loop blocks execution because JavaScript runs on a single thread.
// - Loops run in synchronous flow, not async — they block until finished.

// Infinite & uncontrolled loop

// while(10 > 5){
//     console.log("Hello");
// }

// infinite loop
// var a = 0;
// while(a < 10){
//     console.log('hello');
// }

// finite loop
// while(a < 10){
//     console.log('hello');
//     a++;
// }


// - web API provided by browser like alert,confirm,prompt,location,DOM,Storage(local/session)
        // - Timer: setTimeout & setInterval
        // - console,History API
        // - promise, Fetch API

// var is function-scoped; if declared globally, it attaches to window.
// console.log(a); // undefined
// console.log(window.a); // undefined

// var a = 10;
// console.log(window.a); // 10
// console.log(a); // 10


// ### block scope

// {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(c);

// ### function scope 

// function abc() {
//   var a = 10;   // "var" → function-scoped (lives only inside this function)
//   let b = 20;   // "let" → block-scoped (function is also a block, so only inside)
//   const c = 30; // "const" → block-scoped (same as let, only inside function)

//   console.log(a); // ✅ works → a is accessible inside the function
// }

// // Outside the function:
// console.log(a); // ❌ ReferenceError → "var" is function-scoped, not global
// console.log(b); // ❌ ReferenceError → "let" is block-scoped, not accessible here
// console.log(c); // ❌ ReferenceError → "const" is block-scoped, not accessible here


// let & const --> hoisted but TDZ: Temporal Dead zone: error because accessing befor it's initialization

// - strings is a basically set of charaters 
// var num = 10;
// var a = "Aakash";
// console.log(num + a); // string concatenation

// ### quote 
// console.log("single quote inside double quote - ` `");
// console.log('double quote inside singel quote - " "');

// let a = 10;
// console.log(`backtick ~ template literals --> ${a}`);
// console.log(`${10 + 20}`); // template literals

