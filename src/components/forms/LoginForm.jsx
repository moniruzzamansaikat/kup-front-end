import Button from 'components/shared/Button'
import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <FormControl
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <FormControl
          type="password"
          placeholder="Enter your email"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Button>Login</Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm
