import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import user from '../assets/images/user.png';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';

export default function AppTestimonials(){
    return(
        <Container fluid>
        <Card className='testimonials-body'>
      <Card.Body style={{backgroundColor:'#fafafa'}}>
      <Card.Text style={{color:'#1167d6', backgroundColor:'#f4f8fb', width:'37%', textAlign:'center', borderRadius:'50px', padding:'3px', marginLeft:'auto', marginRight:'auto', display:'block'}}><strong>Our Testimonial</strong></Card.Text>
      <Card.Title className='testimonials-title'>See What Our Lovely<br></br><strong style={{color:'#1167d6'}}>Students</strong> Says About Us</Card.Title>
      </Card.Body>
      </Card>

      <Carousel>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
          <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
          <p>John Roberts(Student, SEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user1} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
        <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
        <p>John Roberts(Student, SEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user2} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
        <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
        <p>John Roberts(Student, SEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </Container>
    )
} 