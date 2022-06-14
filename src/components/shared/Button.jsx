import React from 'react'
import { Button as BSButton } from 'react-bootstrap'
import 'assets/scss/shared/button.scss'

function Button({ children, ...props }) {
  return (
    <BSButton {...props}>
      {children}
    </BSButton>
  )
}

export default Button
