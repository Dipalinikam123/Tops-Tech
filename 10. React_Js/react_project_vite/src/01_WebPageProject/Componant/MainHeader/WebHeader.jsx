import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
} from 'reactstrap';
import './WebHeader.css'
import { NavLink } from 'react-router-dom';

export default function WebHeader() {

  return (
    <div>
      <Navbar expand="md" style={{backgroundColor:"rgb(250, 240, 240)"}}>
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <Collapse navbar className=''>
          <Nav className="me-auto d-flex gap-3 align-items-center" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Track Order
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Shiprocket</DropdownItem>
                <DropdownItem>Bluedart</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> 

            <NavItem>
              <NavLink to={'/allproduct'}>All Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/casualbackpacks'}>Casual Backpacks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/professional'}>Professional</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/travel'}>Travel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/sports'}>Sports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/schoolbags'}>School Bags</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/corporategift'}>Corporate gifting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/bestoffer'}>Best Offer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/lunchbags'}>Lunch Bags</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/blogs'}>Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/contactUs'}>Contact us</NavLink>
            </NavItem>
            
           
           
          </Nav>
          <Input type="text" placeholder="SEARCH PRODUCTS.." style={{width:"230px",marginRight:"20px"}} />
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

