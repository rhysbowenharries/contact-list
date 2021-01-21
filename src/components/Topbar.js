import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Topbar = ({ header, headerLink, buttonText, buttonLink }) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="header" href={headerLink}>
        {header}
      </Navbar.Brand>
      <Navbar.Brand aria-controls="basic-navbar-nav" />
      <Button variant="light" className="button" id="top-button">
        <Nav.Link id="button-text" href={buttonLink}>
          {buttonText}
        </Nav.Link>
      </Button>
    </Navbar>
  );
};

export default Topbar;
