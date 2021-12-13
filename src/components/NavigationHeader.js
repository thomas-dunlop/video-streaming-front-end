import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationHeader = () => {
  return (
    <Navbar>
      <Nav>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/upload'>Upload</Nav.Link>
        <Nav.Link href='/videos'>Videos</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationHeader;