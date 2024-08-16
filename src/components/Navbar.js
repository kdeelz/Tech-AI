import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Photos/logo.png';
import { Link as ScrollLink } from 'react-scroll';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"> 
            <img src={logo} 
             width="90"
             height="80"
             className="d-inline-block align-top"
             alt="logo"
           />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            
            {/* Replace Contact Link */}
            <ScrollLink 
              to="contact-section" 
              smooth={true} 
              duration={500} 
              className="nav-link"
              style={{ cursor: 'pointer' }}
            >
              Contact
            </ScrollLink>

            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Career Opportunities
              </NavDropdown.Item>
            </NavDropdown>
            <ScrollLink 
              to="about-section" 
              smooth={true} 
              duration={500} 
              className="nav-link"
              style={{ cursor: 'pointer' }}
            >
              About
            </ScrollLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
