let obj = {
  name: "Aakash Saha",
  age: 21,
  address: "New Delhi",
  company: "Google",
};

// destructuring
// let fn = ({name,company}) => {
//   console.log(name,company);
// }

// fn(obj)

// ### understanding lexical scope

// JavaScript mein variable lookup us jagah se hota hai jahan function define hua tha, na ki jahan function call hua hai.
// Isliye lexical scope mein function apne definition-time environment ko remember karta hai.
// print() global scope mein define hua tha, isliye uske liye a = 990 hai.
// Jab ab() ke andar print() call hua, JavaScript ye nahi dekhta ki call kis scope se hua hai. Wo dekhta hai ki print define kahan hua tha.

// Variable resolution follows the lexical scope chain: current scope → outer scope → global scope until the variable is found.
// "In JavaScript, scope is determined by where a function is defined, not where it is invoked."
// JavaScript first looks in the nearest (current) lexical scope. If not found, it moves outward through parent scopes until it reaches the global scope.

// let a  = 990;
// let print = () => {
//   console.log(a);
// }

// let ab = () => {
//   let a = 80;
//   print();
// }

// ab()

/* 
1) Destructuring: Array,Object,Functional param destructuring
2) Scopes
3) Functions -> return,param,rest operators,arguments
4) DOM --> it is a bridge between HTML & JS
  - Tree like structure -> DOM + CSSDOM => Render Tree(Real DOM)
  - phases
    - Layout phase(reflow)
    - Paint
    - composite

*/

/*
### Beginning of React.Js ?
- React is a declarative JavaScript library used to build Single Page Applications (SPAs).
- React was created by Facebook in 2011. At that time, it was known as FaxJS(Fax means a copy).
  - In 2013, it was officially launched as React.js.
  - React was started by Jordan Walke. The main purpose behind it was:
    - "Real DOM operations are expensive."

      - If you remember the old Facebook era, whenever we liked a post,
        a rounded loading indicator appeared and we had to wait for a few
        seconds (sometimes even longer).

      - This happened because the Real DOM was being re-rendered for every
        change. At a large scale, this becomes a very expensive operation
        from an engineering perspective.

    - The Real DOM was getting re-rendered even for minor changes.

    - So Jordan Walke thought:
      "Why not create a copy of the Real DOM and perform operations on that instead?"

    - Development started in 2011, and the initial testing phase began under
      the name FaxJS.

    - In 2013, React.js was officially launched and became an open-source
      library, which it continues to be today.

    - earlier it was tested on : Facebook Feed page,Instagram etc...
*/

/* 
### Understanding working of React.Js:
- Real DOM(Render Tree -> Main visuals(jo audience ko dikhta hai))
- Virtual dom: Lightweight copy of your Real DOM
*/
