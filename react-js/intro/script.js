console.log(React);

// ### Real DOM
// let h1 = document.createElement("h1");
// h1.textContent = "hello";
// document.body.append(h1)
// console.dir(h1); // real dom

// ### Virtual DOM
// React.createElement(type(tagName),props(attributes of element,className),Children)
// const rH1 = React.createElement('h1',{className:"headingText"},'I am Heading')
// const rH1 = React.createElement('h1',null,'I am Heading')
// console.log("Virtual DOM ---> ",rH1);

// ### understanding parent & children relationship
// let realDomElem = document.querySelector("#root");
// console.dir(realDomElem);

let rh1 = React.createElement(
  "h1",
  null,
  React.createElement("span", {}, "i m under h1"),
);

// console.log(rh1);

let realDomElem = document.querySelector("#root"); // selecting root container element from the realDOM

//  ReactDOM.createRoot() takes a Real DOM element and establishes it as the root container for the React component tree.
// let rootOfReact = ReactDOM.createRoot(realDomElem).render(rh1);
let rootOfReact = ReactDOM.createRoot(realDomElem);
rootOfReact.render(rh1);

/*
### From the above understanding:

- Ultimately, the Virtual DOM is converted into the Real DOM through ReactDOM.
- React uses the Virtual DOM for efficient DOM updates, while ReactDOM is responsible for rendering those changes to the actual browser DOM.
- This may raise a question: if the Virtual DOM is eventually converted into the Real DOM, why do we need it?

- The answer is that the problem is not the DOM itself, but inefficient DOM manipulation.
- The Real DOM is a complex tree structure containing many nodes, attributes, styles, and child elements.
- Frequent updates to the Real DOM can be expensive because the browser may need to recalculate layouts, repaint elements, and update the screen.

- React addresses this by first updating the lightweight Virtual DOM, comparing it with the previous version (diffing), and then applying only the necessary changes to the Real DOM.
- By reducing unnecessary DOM operations, React improves performance and provides a more efficient rendering process.

- ReactDOM acts as a bridge between the Virtual DOM and the Real DOM, applying Virtual DOM changes to the actual browser DOM.

- During the initial render, ReactDOM mounts the React application into the root element by replacing any existing content inside the root container with the React-generated UI.
- The Virtual DOM is a lightweight JavaScript representation (copy) of the Real DOM used by React for efficient UI updates.

### Real DOM vs Virtual DOM 
Real DOM
   ↓
Browser Objects
   ↓
Actual UI on Screen

Virtual DOM
   ↓
JavaScript Objects
   ↓
Blueprint/Description of UI

-  ReactDOM.createRoot() takes a Real DOM element and establishes it as the root container for the React component tree.
    - Real DOM Element (#root) -> ReactDOM.createRoot() -> React Root -> React Component Tree -> Virtual DOM -> Real DOM Updates
    
    Real DOM Element (#root)
            ↓
    ReactDOM.createRoot(#root)
            ↓
    Creates a React Root
            ↓
    React renders the Component Tree(virtual dom tree)
            ↓
    Creates/Updates the Virtual DOM
            ↓
    React reconciles changes
            ↓
    Updates the Real DOM

- ReactDOM.createRoot() takes a real DOM element (#root), creates a React Root, 
    renders the React Component Tree(Virtual dom Tree), manages it through the Virtual DOM, and efficiently updates the Real DOM when changes occur.
*/

// import { a, sum } from "./main.js";

// console.log(a);

// let res = sum(50, 90);
// console.log(res);

// let RDomElement = document.querySelector("#root");

// let div = React.createElement("div", {}, [
//   React.createElement("h1", {}, React.createElement("span", {}, "i m span")),
//   React.createElement(
//     "h2",
//     {},
//     React.createElement("span", {}, "i m span in h2")
//   ),
// ]);

// ReactDOM.createRoot(RDomElement).render(div);

/*
### Notes:
- DOM is a Tree like structure which contain nodes(parent & child Nodes)

### Questions:
- Library vs Framework -> React Vs Angular ? first principle
*/
