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
import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
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
        <Route path="/forgot-pass" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
