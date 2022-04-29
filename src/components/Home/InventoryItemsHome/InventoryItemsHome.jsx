import React from "react";
import FruitsCard from "./FruitsCard/FruitsCard";
import "./InventoryItemsHome.css";

const data = [
  {
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/qmHyT77/grape.webp",
  },
  {
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/7kbWJhj/date.webp",
  },
  {
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/fY2nH6Y/banana.webp",
  },
  {
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/yPyV0cL/coconut.webp",
  },
  {
    name: "Name",
    quantity: 4,
    supplier: "supplier company",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur",
    img: "https://i.ibb.co/y50Lpsw/guava.webp",
  },
  {
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
            <FruitsCard
              name="Grapes"
              price="40"
              image={f.img}
              desc={f.desc}
              quantity={f.quantity}
              supplier={f.supplier}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InventoryItemsHome;
