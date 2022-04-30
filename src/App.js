import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
