import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

import TytLogo from "../assets/TYTlogo.png";

const TopNavBart = () => {
  return (
    <div className="navbarConatine">
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="dark"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={TytLogo}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#pricing">THERAPIST</Nav.Link>
              <Nav.Link href="#pricing">TYTFC</Nav.Link>
              <Nav.Link href="#pricing">BLOG</Nav.Link>

              <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <button type="button" class="btn btn-outline-warning">
                  Sign IN
                </button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button type="button" class="btn btn-warning">
                  Sign IN
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavBart;
