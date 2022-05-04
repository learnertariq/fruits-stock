import { useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../../utils/firebase.init";
import userService from "../../service/userService";

const Logout = () => {
  useEffect(() => {
    userService.logout();
    signOut(auth);
    window.location = "/";
  }, []);
};

export default Logout;
