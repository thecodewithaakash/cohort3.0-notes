"use strict";
// ###  Type Inference and Annotation
Object.defineProperty(exports, "__esModule", { value: true });
// ### 1. Type Inference
// let x = 90;
// x = 'Hello world!'
// console.log(x);
// ### 2. Annotation
// let a: string = "hello";
// a = "pol";
// a = "bye";
// a = 90 // error: due to annotation type is string...
// console.log(a);
// let a:boolean = true;
// a = "90" //  error: due to annotation type is Boolean...
// a = 10; // error: due to annotation type is Boolean...
// a = false
// console.log(a);
// ### primitive data types
// 1. string
let val = "Shubham";
// 2. boolean ~ true or false
let val2 = true;
// 3. number
let b = 90;
// 4. undefined
let h = undefined;
// 5. null
let x = null;
// 6. bigint
let g = 79697678n;
// 7. symbol
let y = Symbol("hello");
// console.log(y);
// ### any type
// let a:any = 90;
// a = true;
// a = null;
// a = undefined;
// a = "pol";
// console.log(a);
// console.log(a.toUpperCase());
// let a:any = "faizal";
// console.log(a.toUpperCase());
// ### unknown type
// let a:unknown = 90;
// a = true;
// a = null;
// a = undefined;
// a = 'Radha'
// console.log(a);
// let a:unknown = "faizal";
// console.log(a.toUpperCase()); // 'a' is of type 'unknown'.
// let test: never; // keep blank otherwise --> Type 'x' is not assignable to type 'never'.
// ### Arrays and Tuples
console.log("arrays tuples.");
// ### 1. Arrays
// let arrTest = [5,6,7,8,9,0,"Hello","Jio",true,null,undefined]
// console.log(arrTest);
// //  Type '(string | number | boolean | null | undefined)[]' is not assignable to type 'number'.
// let arr:number[] = [5,6,7,8,9,0,"Hello","Jio",true,null,undefined]
// console.log(arr);
// let arr:any[] = [5,6,7,8,9,0,"Hello","Jio",true,null,undefined]
// console.log(arr);
// let arr: number[] = [
//   5, 6, 7, 8, 9, 0, 67, 8, 9, 0, 6, 5, 43, 2, 3, 4, 5, 6, 7, 8, 9, 0, 87, 6, 5,
//   4, 3,
// ];
// let arr1: string[] = ["jio", "pol", "john"];
// let arrBol: boolean[] = [true, false, true, true, true];
// console.log(arr,arr1,arrBol);
// ### 2. Tuples
// let arr2: [number, number, string, boolean] = [56, 78, "pol", true];
// console.log(arr2);
/* Below code --> ⚠️ Error → The tuple type [number, number, string, boolean] expects exactly 4 values
 But you provided 5 values (56, 78, "pol", true, "Aakash"). */
// let arr2: [number, number, string, boolean] = [56, 78, "pol", true,'Aakash']; // error
// Tuples of objects
// let data:[{name:string},{name:string},{name:string}] = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// Array of Objects
// let data: any[] = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// console.log(data);
// let data: Object[] = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// console.log(data);
// let data: Array<Object> = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];
// console.log(data);
// Enums → Define fixed options, useful for backend API type safety
// Enums provide named constants for fixed sets of values, ensuring type safety in APIs and roles.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.USER;
// console.log(role); // Output: 2 (index of USER)
// union
let yolo = "rahul";
yolo = 90;
// yolo = true // error: Type 'boolean' is not assignable to type 'string | number'.
console.log(yolo);
// let status: Status = "test"; //  error -> Type '"test"' is not assignable to type 'Status'.
let status = 'success';
console.log(status);
//# sourceMappingURL=index.js.map