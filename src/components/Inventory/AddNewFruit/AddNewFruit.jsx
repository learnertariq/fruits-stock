import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import http from "../../../service/http";
import "./AddNewFruit.css";

const AddNewFruit = () => {
  const [fruit, setFruit] = useState({
    name: "",
    quantity: 0,
    supplier: "",
    price: 0,
    desc: "",
    img: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newFruitState = { ...fruit };
    newFruitState[name] = value;
    setFruit(newFruitState);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setError(false);
    const getFruits = async () => {
      setLoading(true);
      try {
        const res = await http.post("/fruits", fruit);
        if (res.status === 200) toast.success("Successfully added item");
      } catch (error) {
        console.log(error?.response?.data?.error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getFruits();
  };

  if (loading) {
    return (
      <div className="container text-center my-5">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <section className="form-container mx-auto mt-5 px-2 py-5 p-sm-5">
      <Form className="form" onSubmit={handleAdd}>
        <h1 className="text-center text-primary mb-4">Add New Fruit</h1>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            onBlur={handleBlur}
            name="name"
            type="text"
            placeholder="Fruit Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Control
            required
            onBlur={handleBlur}
            name="supplier"
            type="text"
            placeholder="Supplier Company"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Control
            required
            onBlur={handleBlur}
            name="quantity"
            type="number"
            placeholder="Quantity"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Control
            required
            onBlur={handleBlur}
            name="price"
            type="number"
            placeholder="Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Control
            required
            onBlur={handleBlur}
            name="desc"
            as="textarea"
            rows={3}
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Control
            required
            onBlur={handleBlur}
            name="img"
            type="text"
            placeholder="Image Url"
          />
        </Form.Group>
        {error && <p className="text-error">Unexpected Error happen!</p>}
        <Button
          className="form-btn fw-bold px-4 py-2 text-uppercase"
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </section>
  );
};

export default AddNewFruit;
