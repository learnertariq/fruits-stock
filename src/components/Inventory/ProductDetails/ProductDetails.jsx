import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./ProductDetails.css";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import http from "../../../service/http";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const res = await http.get(`/fruits/${id}`);
      setProduct(res.data);
    };
    getProduct();
  }, []);

  const reduceQuantity = async () => {
    setLoading(true);
    try {
      const res = await http.patch(`/fruits/${id}`, {
        quantity: product.quantity - 1,
      });
      setProduct(res.data);
      toast.success("Successfully decreased");
    } catch (error) {
      toast.error("Error decreasing");
    } finally {
      setLoading(false);
    }
  };

  const handleReStock = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const newStock = parseInt(e.target.newStock.value);

      if (isNaN(newStock) || newStock < 0) return;

      const res = await http.patch(`/fruits/${id}`, {
        quantity: product.quantity + newStock,
      });

      setProduct(res.data);
      toast.success("Successfully added");
    } catch (error) {
      toast.error("error adding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <h1 className="text-center text-success mt-2 mb-4">Product Details</h1>
      <article className="product-details mx-auto p-0 p-sm-5 pb-sm-0">
        <div className="header d-flex justify-content-center mb-3">
          <img
            className="product-details-img bg-light"
            src={product.img}
            alt=""
          />
        </div>
        <div className="main">
          <div className="main-header row">
            <div className="col col-8">
              <h2>{product.name}</h2>
              <h6 className="text-muted">{product.supplier}</h6>
            </div>
            <div className="col col-4 d-flex flex-column align-items-center">
              <h6 className="mb-0">Stock left:</h6>
              <span className="text-danger">🢃</span>
              <span className="fs-3 fw-bold text-success">
                {product.quantity}
              </span>
            </div>
          </div>
          {loading && (
            <div className="container text-center">
              <Spinner animation="border" variant="info" />
            </div>
          )}
          <div className="sub-nav mt-4 mb-2 d-flex justify-content-between gap-2">
            <Button variant="success" className="border border-success">
              Description
            </Button>
            <Button
              variant="outline"
              className="border border-success opacity-75"
            >
              Nutrition
            </Button>
            <Button
              variant="outline"
              className="border border-success opacity-75"
            >
              Reviews
            </Button>
          </div>
          <p className="desc">{product.desc}</p>
          <div className="sub-nav mt-4 d-flex justify-content-between gap-2">
            <Button variant="success" className="">
              Ripe
            </Button>
            <Button variant="outline" className="border border-success">
              Green
            </Button>
          </div>
          <hr />
          <div className="product-footer d-flex justify-content-between gap-2">
            <h2 className="text-danger mb-0">${product.price}</h2>
            <Button onClick={reduceQuantity} variant="danger" className="">
              Delivered
            </Button>
          </div>
        </div>
        <Form className="mt-5" onSubmit={handleReStock}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Re-Stock Fruit</Form.Label>
            <Form.Control
              name="newStock"
              type="number"
              placeholder="Quantity to increase"
            />
          </Form.Group>

          <Button
            className="form-btn fw-bold px-4 py-2 text-uppercase"
            variant="primary"
            type="submit"
          >
            Re-Stock (◑‿◐)
          </Button>
        </Form>
      </article>
      <div className="text-center my-4">
        <Link to="/inventory/manage" className="btn btn-warning">
          Manage Inventories
        </Link>
      </div>
    </section>
  );
};

export default ProductDetails;
