
// ## condtionals 

// ### if else if else 

// let age = 18;
// if (age >= 18) {
//   console.log("You can vote!");
// } else if (age > 65) {
//   console.log("You are a senior citizen!");
// }else {
//   console.log("You can't vote!");
// }

// let math = Number(prompt("Enter your Marks: Math"));
// let Physics = Number(prompt("Enter your marks: Physics "));
// let Chemistry = Number(prompt("Enter your marks: Chemistry "));

// simple avg 
// let avg = (math + Physics + Chemistry) / 3

// let StudentTotal = math  + Physics + Chemistry;
// let total = 300;
// let avg = StudentTotal / total * 100;
// console.log(avg);
// console.log(total);

// if(avg >= 85){
//     console.log("avg is " + avg + " passed,You are getting scholership");
// }else{
//     console.log("Failed");
// }

// - even if else if else -> execute line by line and check the condition one by one.

// let age = 18;

// if(age >= 18 && age <= 65){
//     console.log("You can vote!");
// }else if(age > 65){
//     console.log("You are a senior citizen!");
// }else{
//     console.log("You can't vote!");
// }

// ### nested if else if else -> execute line by line and check the condition one by one.
// var gender = prompt("Enter your gender: Male or Female");
// var age = Number(prompt("Enter your age: "));

// if(gender === "male"){
//   if(age >= 18 && age <= 65){
//     console.log("You can vote!");
//   }else if(age > 65){
//     console.log("You are a senior citizen!");
//   }
// }else{
//   if(gender === "female"){
//     if(age >= 60){
//       console.log("you will get pension around 1500 rs");
//     }else if(age > 80){
//       console.log("you will get enhanced pension around 3000 rs");
//     }
// }


// ### truthy and falsy values
// - falsy values -> false, 0, "", null, undefined, NaN
// - truthy values -> all other values except falsy values
// - if else works on truthy and falsy values. 

// if(0){
//   console.log("this will not execute because 0 is falsy value");
// }else{
//   console.log("0 is falsy value");
// }

// if(""){
//   console.log("this will not execute because empty string is falsy value");
// }else{
//   console.log("empty string is falsy value");
// }

// ### ternary operator -> it is a shorthand for if else statement.
// var age = 18;
// age >= 18 ? console.log("You can vote!") : console.log("You can't vote!");

// switch case ->  it evaluates the expression once and compares it with the values in the case statements.

// let age = 18;
// switch (age) {
//   case 18:
//     console.log("You can vote!");
//     break;
//   case 65:
//     console.log("You are a senior citizen!");
//     break;
//   default:
//     console.log("You can't vote!");
// }

// syntax of switch case
// switch (expression) {
//   case value1:
//     // code block
//     break;
//   case value2:
//     // code block
//     break;
//   ...
//   default:
//     // code block
// }
