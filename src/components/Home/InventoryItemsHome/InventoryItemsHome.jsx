import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFruits from "../../../hooks/useFruits";
import FruitsCard from "./FruitsCard/FruitsCard";
import "./InventoryItemsHome.css";

const InventoryItemsHome = () => {
  const [fruits, setFruits] = useFruits();

  return (
    <section className="container mt-5">
      <h1 className="inventory-heading mx-auto px-5 py-2 bg-warning mb-3">
        Fruits Stock
      </h1>
      <div className="fruits-container row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {fruits.slice(0, 6).map((f) => (
          <div key={f._id} className="col">
            <FruitsCard fruit={f} />
          </div>
        ))}
      </div>
      <div className="text-center my-4">
        <Link to="/inventory/manage" className="btn btn-warning">
          Manage Inventories
        </Link>
      </div>
    </section>
  );
};

export default InventoryItemsHome;
