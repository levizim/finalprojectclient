import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../sessions/authContext"; // Update with your actual path to the authContext file
import logo from ".//images/logo.png"

function NavBar() {
    const { currentUser, logout } = useAuth();

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>  <img
                        alt="Adaept Logo"
                        src={logo}// Adjust if necessary based on your folder structure
                        width="129"  // or adjust size as needed
                        height="35" // or adjust size as needed
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/products">
                        <Nav.Link>Products</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ingredients">
                        <Nav.Link>Ingredients</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/education">
                        <Nav.Link>Education</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="ml-auto">
                    {/* Conditionally render based on the presence of currentUser */}
                    {!currentUser && (
                        <>
                            <LinkContainer to="/signin">
                                <Nav.Link>Sign In</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/adminlogin">
                                <Nav.Link>Admin Login</Nav.Link>
                            </LinkContainer>
                        </>
                    )}
                    {currentUser && (
                        <>
                            <LinkContainer to="/user">
                                <Nav.Link>User</Nav.Link>
                            </LinkContainer>
                            {/* Logout button */}
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                    )}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                    <LinkContainer to="/cart">
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
