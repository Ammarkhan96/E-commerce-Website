import React from 'react'
import "./footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const Links = ['Bed Set' , 'Modern Sofa', 'Arm Chair', 'Personal Accessories']
  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
        <div className='logo'>
           <div>
            <h1>FLY-BUY</h1>
           </div>
         </div>
         <p className='footer_text mt-4 '>
            Its all about your fashion which you want to do at your homes. 
            And which enchance your home features and this is the reason your
            feel proud through us.
           </p>
           </Col>
        <Col lg='3' md='3' className='mb-4'>
          <div className='footer_quick-links'>
            <h4 className='footer_links-title'>Top Categories</h4>
           
            <ListGroup>
              <ListGroupItem className='colum2  ps-0 border-0'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='colum2 danger ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='colum2 ps-0 border-0'>
                <Link to='#'>Bed Sets</Link>
              </ListGroupItem>

              <ListGroupItem className='colum2 ps-0 border-0'>
                <Link to='#'>Personal Accessories</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg='2' md='3' className='mb-4'>
        <div className='footer_quick-links'>
            <h4 className='footer_links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='colum2 ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='colum2 ps-0 border-0'>
                <Link to='cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='colum2 ps-0 border-0'>
                <Link to='login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='colum2 ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4'>
        <div className='footer_quick-links'>
            <h4 className='footer_links-title'>Contact Us</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='colum2 ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>23 Street Near Expo-Store Bahadurabad, Karachi</p>
              </ListGroupItem>

              <ListGroupItem  className='colum2 ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>021-4154356</p>
              </ListGroupItem>

              <ListGroupItem className='colum2 ps-0 border-0 d-flex align-item-center gap-2'>
             <span><i class="ri-mail-line"></i></span>
             <p>ak-mart32@gmail.com</p>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <p className='footer_copyright'>Copyright {year} developed by Ammar Khan. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer