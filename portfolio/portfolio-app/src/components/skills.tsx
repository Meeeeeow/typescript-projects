import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import TrackVisibility from 'react-on-screen';
const Skills = () => {
  return (
    <section className='skill' id='skills'>
      <Container className='skill-container'>
        <Row>
          <Col>
            <div className="title">
              <h2>Skills</h2>
              <div>
                  <h2>My Skills</h2>
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
                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         Python
                     </div>
                     <div className={isVisible ? "progress-bar python" : "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
                     </div>
                 </div>
                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         C++
                     </div>
                     <div className={isVisible ? "progress-bar c" : "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
                     </div>
                 </div>
                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         Javascript
                     </div>
                     <div className={isVisible ? "progress-bar js": "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
                     </div>
                 </div>
                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         React
                     </div>
                     <div className={isVisible ? "progress-bar react" : "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
                     </div>
                 </div>

                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         Typescript
                     </div>
                     <div className={isVisible ? "progress-bar ts" : "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
                     </div>
                 </div>
                 
                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         SQL
                     </div>
                     <div className={isVisible ? "progress-bar sql" : "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
                     </div>
                 </div>

                 <div className={isVisible ? 'skills' : "skills-dispaly-off-page"}>
                     <div className={isVisible ? "info" : "info-display-off-page"}>
                         {<span>Machine learning</span>}
                     </div>
                     <div className={isVisible ? "progress-bar nlp" : "progress-dsiplay-off-page"}>
                         <span className='weight'></span>
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