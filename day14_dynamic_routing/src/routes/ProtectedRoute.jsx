import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let isAdmin = false;

  if (!isAdmin) {
    alert("you are not an admin");
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;