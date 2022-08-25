import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};
