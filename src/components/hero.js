import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import image from '../assets/images/image.png';

export default function AppHero(){
return(
    <Container fluid>
      <Row>
        <Col md={6}>
        <Card className='hero-body'>
      <Card.Body style={{backgroundColor:'#fafafa'}}>
        <Card.Text style={{color:'#1167d6', backgroundColor:'#f4f8fb', width:'37%', textAlign:'center', borderRadius:'50px', padding:'3px'}}><strong>100% Satisfaction Gurantee</strong></Card.Text>
        <Card.Title className='hero-title'>Start Learning <strong style={{color:'#1167d6'}}>Skills</strong><br></br>From Our Top Tutor</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
        <Button style={{backgroundColor:'#1167d6', borderRadius:'50px'}}>Join For Free</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col md={6}>
        <Image src={image} fluid />
        </Col>
      </Row>
    </Container>
)
}