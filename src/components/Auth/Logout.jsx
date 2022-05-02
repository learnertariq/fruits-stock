import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../utils/firebase.init";
import userService from "../../service/userService";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    userService.logout();
    signOut(auth);
    navigate("/");
  }, []);
};

export default Logout;
