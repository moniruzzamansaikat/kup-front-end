import React, {useEffect} from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import 'assets/scss/navmenu.scss'

function Navmenu() {
  return (
    <Navbar expand="lg" className="navmenu">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <NavDropdown title="Adminstration" id="adminstration-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#action/3.1">President</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Headmaster</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Governing Body</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Faculty</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academic" id="academic-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#action/3.1">Lesson Plan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Syllabus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Routine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Magazine</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Co-Curriculum" id="co-curriculum-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Debate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cultural</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Rover Scout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">BNCC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Result" id="result-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="#action/3.4">KUP Result</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Borad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gallery" id="gallery-dropdown" renderMenuOnMount={true}>
              <Link to="/image_gallery" className="dropdown-item">Image Gallery</Link>
              <Link to="/video_gallery" className="dropdown-item">Video Gallery</Link>
            </NavDropdown>
            <Link to="/notice" className="nav-link">Notice</Link>
            <Link to="/mujib_corner" className="nav-link">Mujib Conrner</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navmenu
