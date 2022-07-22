import React, { useContext } from "react";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import AuthContext from "../store/auth-context";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const ctx = useContext(AuthContext);
  const renderMe = ctx.isLoggedIn ? (
    <>
      <Navigation />
      <Home />
    </>
  ) : (
    <Navigate to ='/login' replace />
  );
  return <div>{renderMe}</div>;
};

export default HomePage;
