import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo.png";
import auth from "../../utils/firebase.init";
import "./Navbar.css";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Navbar className="shadow shadow-lg" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="nav-logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/inventory/manage">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="/inventory/new">
                  Add Item
                </Nav.Link>
                <Nav.Link as={Link} to="/inventory/my_items">
                  My Items
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </>
            )}
            {!user && (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
