import axios from "axios";
import { useEffect, useState } from "react";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const getFruits = async () => {
      const res = await axios.get("http://localhost:5000/fruits");
      setFruits(res.data);
    };

    getFruits();
  });

  return [fruits, setFruits];
};

export default useFruits;
