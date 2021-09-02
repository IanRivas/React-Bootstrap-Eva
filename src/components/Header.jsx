import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

import '../assets/styles/Header.scss';
import carousel1 from '../assets/images/carousel1.png';
import carousel2 from '../assets/images/carousel2.png';
import carousel3 from '../assets/images/carousel3.png';

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="roboto">
          <Navbar.Brand href="#home">Evangelion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Anime</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <NavDropdown title="Characters" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Shinji Ikari
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Azuka Langley Sōryū
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Rei Ayanami
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <div className="container-fluid">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={550}
              src={carousel1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={550}
              src={carousel2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={550}
              src={carousel3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Header;
