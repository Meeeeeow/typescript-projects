import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen';
const Skills = () => {
  return (
    <section className='skill'>
      <Container>
        <Row>
          <Col>
            <div className="title">
              <h2>Skills</h2>
              <div>
                  <h2>my Skills</h2>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in ipsa cum repellat optio esse placeat, qui totam, praesentium, facilis nam vel reiciendis rem. Quidem reprehenderit cupiditate rem natus veniam?</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <TrackVisibility>
            {({ isVisible}) =>
                 <div className='skills-bar'>
                 <div className={isVisible ? 'skills' : ""}>
                     <div className={isVisible ? "info" : ""}>
                         Python
                     </div>
                     <div className={isVisible ? "progress-bar python" : ""}>
                         <span></span>
                     </div>
                 </div>
                 <div className={isVisible ? 'skills' : ""}>
                     <div className={isVisible ? "info" : ""}>
                         C++
                     </div>
                     <div className={isVisible ? "progress-bar c" : ""}>
                         <span></span>
                     </div>
                 </div>
                 <div className={isVisible ? 'skills' : ""}>
                     <div className={isVisible ? "info" : ""}>
                         Javascript
                     </div>
                     <div className={isVisible ? "progress-bar js": ""}>
                         <span></span>
                     </div>
                 </div>
                 <div className={isVisible ? 'skills' : ""}>
                     <div className={isVisible ? "info" : ""}>
                         React
                     </div>
                     <div className={isVisible ? "progress-bar react" : ""}>
                         <span></span>
                     </div>
                 </div>
                 
                 
                 <div className={isVisible ? 'skills' : ""}>
                     <div className={isVisible ? "info" : ""}>
                         {<span>Machine learning & Nlp</span>}
                     </div>
                     <div className={isVisible ? "progress-bar nlp" : ""}>
                         <span></span>
                     </div>
                 </div>
               </div>
            }
          </TrackVisibility>
         
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills