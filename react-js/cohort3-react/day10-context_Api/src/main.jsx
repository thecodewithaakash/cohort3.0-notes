import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyShopContextProvider } from "./context/MyWebsite.jsx";
import { ContextProvider } from "./context/MyContext.jsx";
import TestComponents from "./TestComponents.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <MyShopContextProvider>
      <App />
      {/* <TestComponents /> */}
    </MyShopContextProvider>
  </ContextProvider>,
);

/* 
### why we should avoid props drilling ?
- let suppose we have a component structure like this:
    - App: Comp1 and comp2
    - Comp1 contain two childrens: child1 and child2
    - Comp2 contain two childrens: child3 and child4

- now if we want to pass some data from App to child1, child2, child3, and child4 then we have to pass the data from App to
     Comp1 and Comp2 and then from Comp1 to child1 and child2 and from Comp2 to child3 and child4. This is called props drilling.

- props drilling is not a good practice because it makes the code hard to read and maintain. 
  It also makes the components tightly coupled. If we want to change the data in App then we have to change the data in all the components which are using that data.

- so we should avoid props drilling and use context API or state management libraries like Redux, Zustand, etc.

### better approach to avoid Props drilling:
1. DSM(Data sharing manager) -> Context API
2. GSM(Global state management) -> Redux,Zustand etc..

### How context API works internally ?
- it wraps the entire application with a provider component and then we can access the data from any component using useContext hook,
  because when we wrap the entire application with a provider it considered as children of that provider and 
  we can access the data from any component using useContext hook ~ mainly inside router file  we wrap the entire application with a provider component.
    code example:
    <MyShopContextProvider>
      <App /> or <AppRouter /> or <TestComponents />
    </MyShopContextProvider>

- now we can access the data from any component using useContext hook.
  const {data} = useContext(MyShopContext);

- context contains two components:
1. Provider: it provides the data to all the components which are wrapped inside it.
2. Consumer(store): it consumes the data from the provider.


- how to use multiple context in a single component ?
  - we can use multiple context in a single component by wrapping the component with multiple provider components.
    code example:
    <MyShopContextProvider>
      <MyWebsiteContextProvider>
        <App />
      </MyWebsiteContextProvider>
    </MyShopContextProvider>

### summary:

- props drilling is not a good practice because it makes the code hard to read and maintain. 
  It also makes the components tightly coupled. If we want to change the data in App then we have to change the data in all the components which are using that data.
- so we should avoid props drilling and use context API or state management libraries like Redux, Zustand, etc.
- context API is a better approach to avoid props drilling because it provides a way to share data between components
   without having to pass props down manually at every level.

Context API Steps:
1. Create a folder named "context".
2. Define your Context using createContext().
3. Build a Context Provider component:
   - Accepts children as props.
   - Returns <MyContext.Provider>{children}</MyContext.Provider>.
4. Put your shared data inside the Provider.
5. Pass data via the "value" prop.
6. Wrap your root component (e.g., <App />) with the Provider in main.jsx.

*/
