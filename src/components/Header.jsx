import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

import '../assets/styles/Header.scss';
import carousel1 from '../assets/images/carousel1.png';
import carousel2 from '../assets/images/carousel2.png';
import carousel3 from '../assets/images/carousel3.png';

function Header({ scrollA, scrollB }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="sm">
        <Container className="roboto">
          <Navbar.Brand href="#home">Evangelion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => scrollA.current.scrollIntoView()}>
                Anime
              </Nav.Link>
              <Nav.Link onClick={() => scrollB.current.scrollIntoView()}>
                Movies
              </Nav.Link>
              <NavDropdown title="Characters" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/shinji">Shinji Ikari</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/azuka"> Azuka Langley Sōryū</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/rei">Rei Ayanami</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 img-h"
              src={carousel1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-h"
              src={carousel2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-h"
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
