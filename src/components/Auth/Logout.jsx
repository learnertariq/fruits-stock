import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../utils/firebase.init";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    signOut(auth);
    navigate("/");
  }, []);
};

export default Logout;
