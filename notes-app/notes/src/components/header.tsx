import React from 'react'
import { Navbar , Container } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar fixed ="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header