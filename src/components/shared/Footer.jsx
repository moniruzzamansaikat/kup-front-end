import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'assets/scss/shared/footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={2}>
            <h5 className="text-white ">Pages</h5>
            <ListGroup>
              <ListGroupItem>
                <Link to="/">Home</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/about">About us</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/notice">Notice</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/mujib_corner">Mujib Corner</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/login">Login</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={2}>
            <h5 className="text-white ">Essential links</h5>
            <ListGroup>
              <ListGroupItem>
                <Link to="/">Home</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/about">About us</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/notice">Notice</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/mujib_corner">Mujib Corner</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/login">Login</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={2}>
            <h5 className="text-white ">Govt. Links</h5>
            <ListGroup>
              <ListGroupItem>
                <Link to="/">Home</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/about">About us</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/notice">Notice</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/mujib_corner">Mujib Corner</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/login">Login</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={6}>
            <div class="gmap_canvas">
              <h5 className="text-white mb-4">Find us on google map</h5>
              <iframe
                height="200px"
                width="100%"
                src="https://maps.google.com/maps?q=KUP%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
