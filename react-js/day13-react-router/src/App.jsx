import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  // const [toggle,setToggle] = useState(false);
  // const [toggle, setToggle] = useState("home");

  return (
    <div className="h-screen p-2">
      {/* ### Without React-router */}
      {/* <Navbar toggle={toggle} setToggle={setToggle} /> */}
      {/* {toggle ? <About /> : <Home/>} */}

      {/* ### With react-router */}
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;

/* 
### understanding React Router:
React Router is a multi-strategy router for React. You can use it maximally as a React framework or as minimally as you want.

- There are three primary approach/ways, or "modes", to use it in your app, so there are three guides to get you started.
  - Declarative - just use it built in routing components/features just like tailwind css
  - Data
  - Framework

- react router provides/enables functionality to render component based on their paths
- it enables multiple components rendering on the basis of their path.

- behind the scene,React router uses Context API for declarative approach
- BrowserRouter act as Provider

*/


/* 
Step 1: Behind the scenes
- React Router internally uses the Context API.
- This allows it to share routing state (like current location, navigation functions) across the component tree.

Step 2: Declarative approach
- Because of Context, you can declare routes in JSX (e.g., <Route path="/about" element={<About/>}/>).
- You don’t manually pass props down — Router provides them via Context.

Step 3: Provider
- <BrowserRouter> acts as a Context Provider.
- It delivers routing info (location, history, match) to all child components.

Step 4: Consumer
- Components like <Route>, <Link>, useNavigate(), useLocation() are Consumers.
- They read routing state directly from Context.

Step 5: Flow
- Path → mapped to Element.
- Provider supplies state → Consumers use it → Declarative routing works.

✅ Summary:
React Router achieves its declarative style by leveraging the Context API:
Provider (<BrowserRouter>) delivers routing state,
Consumers (<Route>, hooks) consume it,
so you can declare routes cleanly without prop drilling.
*/
