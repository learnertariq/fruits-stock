import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inventory/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
