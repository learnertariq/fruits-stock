import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFruits from "../../../hooks/useFruits";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [fruits, setFruits] = useFruits();

  const handleDelete = async (id) => {
    const agree = window.confirm("Are you sure to delete the item?");
    if (!agree) return;

    const res = await axios.delete(`/fruits/${id}`);

    const deletedFruit = res.data;
    const newFruits = fruits.filter((f) => f._id !== deletedFruit._id);
    setFruits(newFruits);
  };
  return (
    <section className="container">
      <h1 className="text-center text-success mt-2 mb-4">Manage Inventory</h1>
      <article className="all-products mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fruit Name</th>
              <th>Stock Left</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((f) => (
              <tr key={f._id}>
                <td>{f.name}</td>
                <td>{f.quantity}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(f._id)}
                    className=""
                    variant="danger"
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </article>
      <div className="text-center my-4">
        <Link to="/inventory/new" className="btn btn-primary">
          Add New Item
        </Link>
      </div>
    </section>
  );
};

export default ManageInventory;
