import React from "react";
import "./FruitsCard.css";

const FruitsCard = ({ name, price, image, desc, quantity, supplier }) => {
  return (
    <div className="fruit-card">
      <div className="row row-cols-2 bg-light rounded shadow mx-0">
        <div className="col p-3 d-flex flex-column justify-content-between">
          <div className="">
            <h6 className="fw-light mb-0">
              Stock left:{" "}
              <span className="fw-bold text-success">{quantity}</span>
            </h6>
            <h3 className="fs-1">{name}</h3>
          </div>
          <div className="">
            <h3 className="text-danger fw-bold">${price}</h3>
            <h6 className="fw-light mb-0 text-muted supplier-text">
              Supplier: {supplier}
            </h6>
            <button className="fruit-update-btn btn btn-danger fw-bold text-uppercase px-4 py-1 mt-2">
              Update
            </button>
          </div>
        </div>
        <div className="col pe-0 d-flex flex-column justify-content-between">
          <img className="w-100" src={image} alt="" />
          <p className="mb-1 fruit-desc pb-3">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitsCard;
