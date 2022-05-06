import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import http from "../../../service/http";
import auth from "../../../utils/firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [fruits, setFruits] = useState([]);
  const [user, authLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFruits = async () => {
      setLoading(true);
      try {
        const res = await http.get(`/fruits/secured`);
        setFruits(res.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getFruits();
  }, [user]);

  const handleDelete = async (id) => {
    const agree = window.confirm("Are you sure to delete the item?");
    if (!agree) return;

    try {
      const res = await http.delete(`/fruits/${id}`);

      const deletedFruit = res.data;
      const newFruits = fruits.filter((f) => f._id !== deletedFruit._id);
      setFruits(newFruits);
      toast.success("successfully deleted");
    } catch (error) {
      toast.error("error deleting");
    }
  };

  return (
    <section className="container">
      <h1 className="text-center text-success mt-2 mb-4">My Items</h1>

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
        {loading && (
          <div className="container text-center my-5">
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </article>
    </section>
  );
};

export default MyItems;
