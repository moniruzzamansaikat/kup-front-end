import LoginForm from 'components/forms/LoginForm'
import Meta from 'components/shared/Meta'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function LoginPage() {
  return (
    <Container>
      <Meta title="Login" />

      <p className="page_title">Login</p>

      <main>
        <Row>
          <Col md={4} className="offset-md-4 my-3">
            <Card className="p-3">
              <LoginForm />
            </Card>
          </Col>
        </Row>
      </main>
    </Container>
  )
}

export default LoginPage
