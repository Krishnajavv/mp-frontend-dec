import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <Navbar className="bg-danger">
        <Container>
          <Navbar.Brand href="#home "  style={{color:'white',fontWeight:'bold',fontSize:'30px'}}>
          <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
          <i class="fa-solid fa-compact-disc fa-beat"></i>
           Media-Player-App
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header