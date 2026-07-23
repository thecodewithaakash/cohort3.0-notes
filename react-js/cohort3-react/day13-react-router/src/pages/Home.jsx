import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      {/* Acts as a placeholder for child routes. */}
      <Outlet />
    </div>
  );
};

export default Home;

/*
<Outlet />:
- Special React Router component.
- Acts as a placeholder for child routes.
- When a nested <Route> matches, its element is rendered inside <Outlet>.
- In simple terms: <Outlet /> = "accept and render children routes here".
*/
