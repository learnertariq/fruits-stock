import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import FruitsCard from "./FruitsCard/FruitsCard";
import "./InventoryItemsHome.css";

const InventoryItemsHome = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const getFruits = async () => {
      const res = await axios.get("http://localhost:5000/fruits");
      setFruits(res.data);
    };

    getFruits();
  }, []);

  return (
    <section className="container mt-5">
      <h1 className="inventory-heading mx-auto px-5 py-2 bg-warning mb-3">
        Fruits Stock
      </h1>
      <div className="fruits-container row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {fruits.map((f, i) => (
          <div key={i} className="col">
            <FruitsCard fruit={f} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InventoryItemsHome;
