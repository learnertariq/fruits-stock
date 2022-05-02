import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import ProductDetails from "./components/Inventory/ProductDetails/ProductDetails";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import RequireAuth from "./components/Auth/RequireAuth";
import ManageInventory from "./components/Inventory/Manage/ManageInventory";
import AddNewFruit from "./components/Inventory/AddNewFruit/AddNewFruit";
import MyItems from "./components/Inventory/MyItems/MyItems";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inventory/manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/my_items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/new"
          element={
            <RequireAuth>
              <AddNewFruit />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
