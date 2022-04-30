import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Register from "./components/Auth/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
