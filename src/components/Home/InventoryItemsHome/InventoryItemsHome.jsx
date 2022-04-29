import React from "react";
import FruitsCard from "./FruitsCard/FruitsCard";
import "./InventoryItemsHome.css";

const data = [
  {
    _id: 1,
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/qmHyT77/grape.webp",
  },
  {
    _id: 2,
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/7kbWJhj/date.webp",
  },
  {
    _id: 3,
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/fY2nH6Y/banana.webp",
  },
  {
    _id: 4,
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/yPyV0cL/coconut.webp",
  },
  {
    _id: 5,
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/y50Lpsw/guava.webp",
  },
  {
    _id: 6,
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/2NL2JSw/lichee.webp",
  },
];

const InventoryItemsHome = () => {
  return (
    <section className="container mt-5">
      <h1 className="inventory-heading mx-auto px-5 py-2 bg-warning mb-3">
        Fruits Stock
      </h1>
      <div className="fruits-container row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {data.map((f, i) => (
          <div key={i} className="col">
            <FruitsCard fruit={f} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InventoryItemsHome;
