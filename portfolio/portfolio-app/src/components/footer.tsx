import React from 'react'
import { Container } from '@mui/material';
import { Col, Row } from 'react-bootstrap'
import navLink1 from '../assets/img/nav-icon1.svg';
import navLink2 from '../assets/img/nav-icon2.svg';
import navLink3 from '../assets/img/nav-icon3.svg';

import { GiPotionBall } from "react-icons/gi";
const Footer = () => {
  return (
    <footer className='footer'>
        <Container maxWidth='xl'>
            <Row className='align-items-center'>
                <Col sm={12} md={6} xl={3} className='footer-first'>
                    <h1 className='footer-logo'>.Sakib()</h1>
                    
                </Col>
                <Col sm={12} md={6} xl={3}  className='text-center text-sm-center'>
                        
                    <div className="footer-widget-heading">
                    <h3>Made With 
                        <span className="potion-svg">
                                <GiPotionBall/>
                        </span>
                    </h3>
                    </div>
                    <div className='tools'>
                       <span>React</span>
                       <span>Typescript</span>
                       <span>React-bootsrap</span>
                       <span>CSS</span>
                       <span>React MUI</span>
                       <span>GSAP</span>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} className='text-center text-sm-center mt-0 third'>
                <div className="footer-widget-heading">
                    <h3>Useful Links 
                        <span className="potion-svg">
                                <GiPotionBall/>
                        </span>
                    </h3>
                    </div>
                    <div className='tools'>
                       <span>React</span>
                       <span>Typescript</span>
                       <span>React-bootsrap</span>
                       <span>CSS</span>
                       
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} className='text-center text-sm-end'>
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