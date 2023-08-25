import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../sessions/authContext";
import logo from "./images/logo.png";

function NavBar() {
    const { currentUser, logout } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                        alt="Adaept Logo"
                        src={logo}
                        width="129"
                        height="35"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
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
                <Nav className="mr-2">
                    <LinkContainer to="/cart">
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
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
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                    )}
                </Nav>
                <Form inline className="d-flex">
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-0 border-right-0 rounded-left" 
                        style={{ boxShadow: 'none' }} 
                    />
                    <Button 
                        variant="outline-light" 
                        className="p-0 border-left-0 rounded-right" 
                        style={{ width: '40px', height: '40px', borderRadius: '0 5px 5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fas fa-search"></i>
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
