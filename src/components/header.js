import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

export default function AppHeader(){
    return(
        <Navbar collapseOnSelect expand="lg">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="152"
              height="47"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#"><strong style={{color:'#1167d6'}}>Home</strong></Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Subject</Nav.Link>
            <Nav.Link href="#">Testimonial</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets"><strong>Sign In</strong></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{backgroundColor:'#1167d6', color:'#ffffff', borderRadius:'50px', width:'85px', textAlign:'center'}}>
              <strong>Sign Up</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}