import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import Singleblog from "./components/Singleblog";
import Editblog from "./components/Editblog";
import Logincomp from "./components/Logincomp";

const Myroutes = () => {
  const user = sessionStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        {user && <Route path="/login" element={<Navigate replace to="/" />} />}
        {!user && (
          <Route path="/create" element={<Navigate replace to="/login" />} />
        )}
        <Route path="/create" exact element={<Form />} />
        {!user && (
          <Route
            path="/getblog/edit/:id"
            element={<Navigate replace to="/login" />}
          />
        )}
        <Route path="/login" exact element={<Logincomp />} />
        <Route path="/getblog/edit/:id" element={<Editblog />} />
        <Route path="/getblog/:id" exact element={<Singleblog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;
