import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Style.css";
import { useEffect } from "react";
import React from "react";
import Login from "./Login";
import Home from "./Home";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  //const user = useSelector((state) => state.user.user);
  const logged = useSelector((state) => state.user.logged);

  useEffect(() => {
    console.log("User logged in with success!");
  }, [logged]);

  if (logged) {
    return (
      <>
        <Home />
      </>
    );
  }

  return (
    <>
      <Login />
      <Footer />
    </>
  );
};

export default AuthProvider;
