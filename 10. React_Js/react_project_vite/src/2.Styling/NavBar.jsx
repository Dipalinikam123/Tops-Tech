import { Flame } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <>
    <div className='bg-color'>
      
      <Navbar expand="lg">
      <Container >
         
      <NavDropdown title="Browse All Categories" id="navbarScrollingDropdown" className='fs-6 border border-2 border-success bg-success text-white me-3' >
              <NavDropdown.Item href="#action3">
                 Hello
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

        <Navbar.Brand href="#" className='text-danger fw-bold'><Flame className='text-success'/> Hot Deals</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }} 
            navbarScroll
          >
            <Nav.Link href="#action1"  id='syt'>Home</Nav.Link>
            <Nav.Link href="#action2"   id='syt'>About</Nav.Link>
            <Nav.Link href="#action3"   id='syt'>Shop</Nav.Link>
            <Nav.Link href="#action4"  id='syt'>Vendors</Nav.Link>
            <Nav.Link href="#action5"  id='syt'>Mega Menu</Nav.Link>
            <Nav.Link href="#action6"  id='syt'>Blog</Nav.Link>
            <Nav.Link href="#action7"  id='syt'>Pages</Nav.Link>
            <Nav.Link href="#action8"  id='syt'>Contact</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
    </>
  )
}
