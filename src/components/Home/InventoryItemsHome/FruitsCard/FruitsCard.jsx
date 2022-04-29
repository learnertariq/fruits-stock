import React from "react";
import "./FruitsCard.css";

const FruitsCard = ({ name, price, image }) => {
  return (
    <div className="fruit-card">
      <div className="row row-cols-2 bg-light rounded align-items-center">
        <div className="col p-3">
          <div className="">
            <h6 className="fw-light mb-0">Top sales</h6>
            <h3 className="fs-1">{name}</h3>
          </div>
          <div className="mt-5">
            <h6 className="fw-light mb-0">Weekend Discount</h6>
            <h3 className="text-danger">${price}</h3>
          </div>
        </div>
        <div className="col pe-0">
          <img className="w-100" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FruitsCard;
