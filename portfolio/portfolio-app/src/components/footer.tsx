import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/img/logo.svg';
import navLink1 from '../assets/img/nav-icon1.svg';
import navLink2 from '../assets/img/nav-icon2.svg';
import navLink3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <img src={logo} alt="Logo"/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href="#home"><img src={navLink1} alt=""/></a>
                        <a href="#home"><img src={navLink2} alt=""/></a>
                        <a href="#home"><img src={navLink3} alt=""/></a>
                    </div>
                    <p>Developed with Typescript and CSS</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer