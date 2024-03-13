import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';
import icon6 from '../assets/images/icon6.png';
import icon7 from '../assets/images/icon7.png';
import icon8 from '../assets/images/icon8.png';
import icon9 from '../assets/images/icon9.png';
import icon10 from '../assets/images/icon10.png';

export default function AppCategory(){
    return(
        <Container fluid>
      <Row>  
        <Card className='category-body'>
      <Card.Body style={{backgroundColor:'#fafafa'}}>
        <Card.Text style={{color:'#1167d6', backgroundColor:'#f4f8fb', width:'37%', textAlign:'center', borderRadius:'50px', padding:'3px', marginLeft:'auto', marginRight:'auto', display:'block'}}><strong>Unique Courses Categories</strong></Card.Text>
        <Card.Title className='category-title'>Find Online Tutor in<br></br>Any <strong style={{color:'#1167d6'}}>Category</strong></Card.Title>
      </Card.Body>
    </Card>
      </Row>

      <Row>
        <Col sm={4}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon5} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Health & Fitness</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon6} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Lifestyle</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon7} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Marketing</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col sm={3}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon8} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Art & Design</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon9} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Business</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon10} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Music</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3}>
        <Card style={{ width: '18rem', backgroundColor:'#f4f8fb', border:'none', textAlign:'center' }}>
      <Card.Img variant="top" src={icon4} style={{width:'90px', height:'90px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
      <Card.Body>
        <Card.Title>Development</Card.Title>
        <Card.Text>
        25 Courses
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Button style={{backgroundColor:'#1167d6', borderRadius:'50px', marginLeft:'auto', marginRight:'auto', display:'block'}}>See All Categories</Button>
    </Container>
    )
}