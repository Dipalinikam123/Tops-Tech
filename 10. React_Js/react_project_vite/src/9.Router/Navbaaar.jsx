import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import "./Index.css"

export default function Navbaaar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='w-100 d-flex justify-content-center'>
      <Navbar expand="lg">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='d-flex '>
          <Nav className="me-auto d-flex gap-4" navbar>
            <NavItem><NavLink to={""}>HOME</NavLink></NavItem>
            <NavItem><NavLink to={"/service"}>SERVICE</NavLink></NavItem>
            <NavItem><NavLink to={"/contact"}>CONTACT US</NavLink></NavItem> 
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}