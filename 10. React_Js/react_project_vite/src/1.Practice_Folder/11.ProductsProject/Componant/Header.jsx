import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
 import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" style={{backgroundColor:'lightcoral',borderRadius:"10px"}}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 me-auto d-flex justify-content-center align-items-center gap-5" navbar >
            <NavItem><NavLink to={"/"}>Home</NavLink></NavItem>
            <NavItem><NavLink to={"/about"}>About</NavLink></NavItem>
            <NavItem><NavLink to={"/product"}>Product</NavLink></NavItem>              
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
