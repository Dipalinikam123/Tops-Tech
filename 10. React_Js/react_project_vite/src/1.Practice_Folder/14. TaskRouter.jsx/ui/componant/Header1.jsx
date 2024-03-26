import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,  
  NavbarText,
  Button,
} from 'reactstrap';
import LogModel from '../../Models/LogModel';

export default function Header1() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <>
    <LogModel toggle={toggle} modal={modal}/>
      <Navbar expand="lg" className='w-100 bg-warning'>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler/>
        <Collapse navbar>
          <Nav className="me-auto ms-auto d-flex gap-5 align-items-center justify-content-between" navbar>
            <NavItem>
             <NavLink to={"/"}>hello</NavLink>
            </NavItem>
            <NavItem>
             <NavLink to={"/contact"}>Contact</NavLink>
            </NavItem>
            <NavItem>
             <NavLink to={"/admin"}>Admin</NavLink>
            </NavItem>
           
          </Nav>
          <Button color='danger' onClick={()=>toggle()}>Login</Button>
        </Collapse>
      </Navbar>
    </>
  );
}
