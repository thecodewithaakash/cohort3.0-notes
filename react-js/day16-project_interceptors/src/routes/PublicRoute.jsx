import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoute = () => {
  console.log("public route rendering...");
  const { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicRoute;
