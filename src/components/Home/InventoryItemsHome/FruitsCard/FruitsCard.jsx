import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FruitsCard.css";

const FruitsCard = ({ fruit }) => {
  return (
    <div className="fruit-card">
      <div className="row row-cols-2 bg-light rounded shadow mx-0">
        <div className="col p-3 d-flex flex-column justify-content-between">
          <div className="">
            <h6 className="fw-light mb-0">
              Stock left:{" "}
              <span className="fw-bold text-success">{fruit.quantity}</span>
            </h6>
            <h3 className="fs-1">{fruit.name}</h3>
          </div>
          <div className="">
            <h3 className="text-danger fw-bold">${fruit.price}</h3>
            <h6 className="fw-light mb-0 text-muted supplier-text">
              Supplier: {fruit.supplier}
            </h6>
            <Button
              className="fruit-update-btn fw-bold text-uppercase px-4 py-1 mt-2"
              variant="danger"
              as={Link}
              to={`inventory/${fruit._id}`}
            >
              Update
            </Button>
          </div>
        </div>
        <div className="col pe-0 d-flex flex-column justify-content-between">
          <img className="w-100" src={fruit.img} alt="" />
          <p className="mb-1 fruit-desc pb-3">{fruit.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitsCard;
