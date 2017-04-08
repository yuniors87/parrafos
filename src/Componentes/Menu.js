import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activo: false,
      usuario: props.value
    }
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href='#' className='active'>
              Generador de párrafos
            </NavItem>
            <NavItem href='#'>
              Link
            </NavItem>
            <NavItem href='#'>
              Link Right
            </NavItem>
            <NavItem href='#'>
              Link Right
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown title={this.state.usuario} id='basic-nav-dropdown'>
              <MenuItem> Perfil
              </MenuItem>
              <MenuItem> Cambiar contraseña
              </MenuItem>
              <MenuItem divider />
              <MenuItem> Salir
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Menu
