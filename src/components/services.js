import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import icon from '../assets/images/icon.jpg';
import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';

export default function AppServices(){
    return(
        <Container fluid>
      <Row>
        <Col md={6}>
        <Card className='services-body'>
      <Card.Body style={{backgroundColor: '#fafafa'}}>
        <Card.Text style={{color:'#1167d6', backgroundColor:'#f4f8fb', width:'37%', textAlign:'center', borderRadius:'50px', padding:'3px'}}><strong>Why Choose Us</strong></Card.Text>
        <Card.Title className='services-title'>Benefits You get When<br></br>Using our <strong style={{color:'#1167d6'}}>Services</strong></Card.Title>
      </Card.Body>
    </Card>
        </Col>
        <Col md={6}>
        <p style={{marginTop:'110px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
      </Row>

      <Row style={{ marginTop:'35px' }}>

        <Col md={3}>
        <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img variant="top" src={icon} style={{width:'75px', height:'71px'}}/>
      <Card.Body>
        <Card.Title>Certified Mentor</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col md={3}>

        <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img variant="top" src={icon1} style={{width:'75px', height:'71px'}}/>
      <Card.Body>
        <Card.Title>24/7 Tutor Availability</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col md={3}>

        <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img variant="top" src={icon2} style={{width:'75px', height:'71px'}}/>
      <Card.Body>
        <Card.Title>Interactive Whiteboard</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col md={3}>

        <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img variant="top" src={icon3} style={{width:'75px', height:'71px'}}/>
      <Card.Body>
        <Card.Title>Affordable Prices</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
      </Row>
    </Container>
    )
}