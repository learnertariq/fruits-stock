import React from "react";
import { Button, Table } from "react-bootstrap";

const ManageInventory = () => {
  return (
    <section className="container">
      <h1 className="text-center text-success mt-2 mb-4">Manage Inventory</h1>
      <article className="all-products">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fruit Name</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button className="" variant="danger">
                  X
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </article>
    </section>
  );
};

export default ManageInventory;
