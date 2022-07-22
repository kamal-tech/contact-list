import React, { useContext } from "react";
import Login from "../components/Login";
import AuthContext from "../store/auth-context";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const ctx = useContext(AuthContext);
  const renderMe = ctx.isLoggedIn ? (
    <>
      <Navigate to="/home" replace />
    </>
  ) : (
    <Login />
  );
  return <div>{renderMe}</div>;
};

export default LoginPage;
