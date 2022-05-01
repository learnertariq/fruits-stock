import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const getFruits = async () => {
      const res = await axios.get("http://localhost:5000/fruits");
      setFruits(res.data);
    };

    getFruits();
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
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
    </section>
  );
};

export default ManageInventory;
