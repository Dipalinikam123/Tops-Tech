import { BaggageClaim, CircleDashed, Egg, Heart, Slack, User2 } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div className="header">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >

        <div className="logo">
      <Egg  className=' text-success className="hoverable" fs-1 mb-3'/>
        <Navbar.Brand href="#" className='fs-1 text-success'>Nest</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            </Nav>
        </div>

        <div className="search">
              <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-100 "
              aria-label="Search"
            /> <Button variant="outline-success">Search</Button>
            </Form>
        </div>

        <div className="icons">
            <Nav>
            <Form.Control 
              type="location"
              placeholder="Your Location"
              className="m-1 "
              id='location' 
              aria-label="location"
            /> 

            <Nav.Link href="#action1" className="hoverable"><CircleDashed/>Compare </Nav.Link>
            <Nav.Link href="#action1" className="hoverable"><Heart/>Wishlist </Nav.Link>
            <Nav.Link href="#action1" className="hoverable"><BaggageClaim/>Cart </Nav.Link>
            <Nav.Link href="#action2" className="hoverable"> <User2 />  Account</Nav.Link>
          </Nav>
        </div>
        
      </Container>
    </Navbar> 

    </div>
  );
}