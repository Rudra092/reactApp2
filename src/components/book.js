import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AppBook(){
    return(
    <Container fluid>
      <Card className='book-body'>
      <Card.Body style={{backgroundColor:'#062a5e', padding:'80px', borderRadius:'10px'}}>
        <Card.Title className='book-title'>Get Started With <strong style={{color:'#1167d6'}}>EduTutor</strong> Now</Card.Title>
        <Card.Text style={{color:'#ffffff', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Card.Text>
      
        <Form className="d-flex" style={{marginLeft:'auto', marginRight:'auto', display:'block', width:'50%'}}>
            <Form.Control
              type="search"
              placeholder="Enter Email Address"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:'#1265df'}}>Book</Button>
          </Form>
      </Card.Body>
    </Card>
    </Container>
    )
}