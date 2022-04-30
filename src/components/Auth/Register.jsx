import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import "./Auth.css";

const Register = () => {
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  ///////// Firebase methods
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  ///////// Firebase methods

  useEffect(() => {
    if (user) {
      navigate(location?.state?.from?.pathname || "/", {
        state: location?.state,
        replace: true,
      });
    }
  }, [user]);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // creating user
    await createUserWithEmailAndPassword(userState.email, userState.password);
    // update display name
    await updateProfile(user, { displayName: userState.name });
  };

  return (
    <Form
      className="form mx-auto mt-5 px-2 py-5 p-sm-5"
      onSubmit={handleRegister}
    >
      <h1 className="text-center text-primary mb-3">Register</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handleBlur}
          name="name"
          type="text"
          placeholder="Enter Your Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onBlur={handleBlur}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button
        className="form-btn fw-bold px-4 py-2 text-uppercase"
        variant="primary"
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};

export default Register;
