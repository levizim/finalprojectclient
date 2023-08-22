import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>YourLogo</Navbar.Brand>
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
                    <LinkContainer to="/signin">
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/adminlogin">
                        <Nav.Link>Admin Login</Nav.Link>
                    </LinkContainer>
                    {/* Add the link to UserPage */}
                    <LinkContainer to="/user">
                        <Nav.Link>User</Nav.Link>
                    </LinkContainer>
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
