import LoginForm from 'components/forms/LoginForm'
import Meta from 'components/shared/Meta'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function LoginPage() {
  return (
    <Container>
      <Meta title="Login" />

      <p className="page_title">Login</p>

      <main>
        <Row>
          <Col md={4} className="offset-md-4 my-3">
            <LoginForm />
          </Col>
        </Row>
      </main>
    </Container>
  )
}

export default LoginPage
