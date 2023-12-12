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
  Button,
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import "../NavBar/navbar.css"
import RegistrationModel from '../../ModelLogin/RegistrationModel';

export default function Navbaaar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [regModal, setRegModal] = useState(false);
  const regToggle = () => setRegModal(!regModal);

  return (
<>
  <RegistrationModel modal={regModal} toggle={regToggle}/>    
    <div className='w-100 d-flex align-items-center p-3'style={{background:'linear-gradient(0,lightBlue,black)'}}>
      <div  className=' d-flex justify-content-start ' style={{color:"purple", textShadow:"2px 2px 2px white"}}>
        <h1>LOGO</h1>
      </div>

      <div  className='w-100 d-flex justify-content-center'>

      <Navbar expand="lg">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='d-flex '>
          <Nav className="me-auto d-flex gap-4" navbar>
            <NavItem><NavLink to={""}>HOME</NavLink></NavItem>
            <NavItem><NavLink to={"/service"}>SERVICE</NavLink></NavItem>
            <NavItem><NavLink to={"/contact"}>CONTACT US</NavLink></NavItem>
            <NavItem><NavLink to={"/product"}>PRODUCT</NavLink></NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      <div>
        <Button  style={{
          backgroundColor:"red",
          width:"120px",
          fontWeight:"700"
        }} onClick={regToggle}>Login</Button>
      </div>
    </div>
    </>
  );
}