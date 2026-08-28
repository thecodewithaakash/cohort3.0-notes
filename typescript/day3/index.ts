// let UserObj: {
//   name: string;
//   age: number;
//   company: string;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//   };
//   employeeId?: string;
// } =  {
//   name: "rahul",
//   age: 45,
//   company: "sheryians",
//   address: {
//     street: "Malabar road",
//     city: "Mumbai",
//     state: "Maharastra",
//   },
// };

// console.log(UserObj);

// ### type alias
type UserObj = {
  name: string;
  age: number;
  company: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  employeeId?: string; // optional
};

let userObj: UserObj = {
  name: "rahul",
  age: 45,
  company: "sheryians",
  address: {
    street: "Malabar road",
    city: "Mumbai",
    state: "Maharastra",
  },
};

// userObj.name = "pl";
// userObj.name = 1; // Type Inference ->  Type 'number' is not assignable to type 'string'.

// userObj.employeeId = "spl89"; // Object is mutable
// console.log(userObj);

// userObj.role = "Engineer" // Property 'role' does not exist on type 'UserObj'.

// bad practice
// let obj:any = {};
// obj.name = "Aakash"
// console.log(obj);

// 👉 Function parameters default to "any" when no type is given because TS allows them to accept any datatype,
//  ensuring JS compatibility — but explicit types are needed for safety.

// let sum = (a, b) => {  // any
//   return a + b;
// };
// console.log(sum(89, 78));

// let sum = (a: number, b: number) => {
//   return a + b;
// };

// let res:string = sum(11,1) // Type 'number' is not assignable to type 'string'.
// let res:number = sum(11,1)
// console.log(res);

// // # setting return type
// let sum = (a: number, b: number):string => {
//   // return a + b; // Type 'number' is not assignable to type 'string' --> because return type should be "string"...
//   // return "a + b" // no error
// };

// let res:string = sum(11,1)
// console.log(res);

// let sum = (a: number, b: number):number => {
//  return a + b;
// };

// let res:number = sum(78,78);
// console.log(res);

// let sum = (a: number, b: number): void => { // void means --> "no return"
//   console.log(a + b);
// };

// sum(78, 78);

// // optional parameters
// let sum = (a: number, b?: number): void => {
//   // console.log(a + b); // 'b' is possibly 'undefined'.
//   b = 1;
//   console.log(a + b);
// };

// sum(78); // Expected 2 arguments, but got 1 -->  An argument for 'b' was not provided.

// ### default params value
// let sum = (a: number, b: number = 1): void => {
//   console.log(a + b);
// };

// sum(78)
// sum(78,78)

// ### accepting function inside parameters
// let sum = (a: number, b: () => void): void => {
//   // console.log(a + b); // Operator '+' cannot be applied to types 'number' and '() => void'.
//   console.log(a);
//   b();
// };

// sum(78, () => {console.log("b() is calling...")});

// let sum = (a: number, b: () => void): void => {
//   console.log(a);
//   let data = b(); // data = void
//   return data;    // return type must be void
// };

// let response = sum(78, () => {});
// console.log(response); // undefined


// let sum = (a: number, b: () => number): number => {
//   // console.log(a);
//   let data = b();
//   return a + data;
// };

// let res: number = sum(78, () => {
//   return 10; // explicit return
// });
// console.log(res);

// shorthand
// let res: number = sum(78, () => 10); // implicit return 
// console.log(res);

// let val = sum(78, () => 56);
// console.log(val);



// recursive function ~ currying
// let sum = (a: number) => {
//   return (b?: number) => {
//     if (b !== undefined) return sum(a + b); // keeps recursing
//     return a; // only stops when b is undefined
//   };
// };


// let data = sum(89)(78)()
// console.log(data);

// let data = sum(89)(78)
// console.log(data);
// console.log(data());

// recursive function
// let data = sum(1)(2)(3)(5)();
// console.log(data);

// let sum = (a: number) => (b?: number) => {
//   if (b !== undefined) return sum(a + b);
//   return a;
// };
// let data = sum(23)(45)();
// console.log(data);

let sum = (...rest: number[]): number => {
  // console.log(rest); // arrays
  // a: accumulator
  // v: current value
  let data = rest.reduce((a, v) => a + v, 0);
  return data;
};

// let res:number = sum(67, 78, 90, 87, 6, 5, 4, 3, 2, 6, 4, 5, 6,"3");
let res:number = sum(67, 78, 90, 87, 6, 5, 4, 3, 2, 6, 4, 5, 6);
console.log(res);
