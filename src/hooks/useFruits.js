import axios from "axios";
import { useEffect, useState } from "react";
import http from "../service/http";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFruits = async () => {
      setLoading(true);
      try {
        const res = await http.get("/fruits");
        setFruits(res.data);
      } catch (error) {
        //
      } finally {
        setLoading(false);
      }
    };

    getFruits();
  }, []);

  return [fruits, setFruits, loading];
};

export default useFruits;
