import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function AppInformation(){
    return(
        <Container fluid style={{backgroundColor:'#1167d6'}}>
        <Row>
          <Col md={3}>

    <Card style={{ width: '18rem', textAlign:'center', backgroundColor:'transparent', border:'none', color:'#ffffff', borderRadius:'0px', borderRight:'1px solid #ffffff' }}>
      <Card.Body>
        <Card.Title><h3>150+</h3></Card.Title>
        <Card.Text>
        Instructors
        </Card.Text>
      </Card.Body>
    </Card>

          </Col>
          <Col md={3}>

    <Card style={{ width: '18rem', textAlign:'center', backgroundColor:'transparent', border:'none', color:'#ffffff', borderRadius:'0px', borderRight:'1px solid #ffffff' }}>
      <Card.Body>
        <Card.Title><h3>8500+</h3></Card.Title>
        <Card.Text>
        Success Stories
        </Card.Text>
      </Card.Body>
    </Card>

          </Col>
          <Col md={3}>

    <Card style={{ width: '18rem', textAlign:'center', backgroundColor:'transparent', border:'none', color:'#ffffff', borderRadius:'0px', borderRight:'1px solid #ffffff' }}>
      <Card.Body>
        <Card.Title><h3>350+</h3></Card.Title>
        <Card.Text>
        Courses & Subjects
        </Card.Text>
      </Card.Body>
    </Card>

          </Col>
          <Col md={3}>

    <Card style={{ width: '18rem', textAlign:'center', backgroundColor:'transparent', border:'none', color:'#ffffff', borderRadius:'0px'}}>
      <Card.Body>
        <Card.Title><h3>600k+</h3></Card.Title>
        <Card.Text>
        Hours Tutor
        </Card.Text>
      </Card.Body>
    </Card>

          </Col>
        </Row>
      </Container>
    )
}