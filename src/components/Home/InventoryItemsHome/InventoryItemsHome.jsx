import React from "react";
import FruitsCard from "./FruitsCard/FruitsCard";
import "./InventoryItemsHome.css";
import img1 from "../../../assets/fruits/1.webp";

const InventoryItemsHome = () => {
  return (
    <section className="container mt-5">
      <h1 className="inventory-heading mx-auto px-5 py-2 bg-warning mb-3">
        Fruits Stock
      </h1>
      <div className="fruits-container row g-4">
        <div className="col">
          <FruitsCard name="Grapes" price="40" image={img1} />
        </div>
        <div className="col">
          <FruitsCard name="Grapes" price="40" image={img1} />
        </div>
        <div className="col">
          <FruitsCard name="Grapes" price="40" image={img1} />
        </div>
      </div>
    </section>
  );
};

export default InventoryItemsHome;
