import axios from "axios";
import { useEffect, useState } from "react";
import http from "../service/http";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const getFruits = async () => {
      const res = await http.get("/fruits");
      setFruits(res.data);
    };

    getFruits();
  });

  return [fruits, setFruits];
};

export default useFruits;
