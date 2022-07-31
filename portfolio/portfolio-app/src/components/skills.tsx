import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
          <div className='skills-bar'>
            <div className='skills'>
                <div className="info">
                    Python
                </div>
                <div className="progress-bar python">
                    <span></span>
                </div>
            </div>
            <div className='skills'>
                <div className="info">
                    C++
                </div>
                <div className="progress-bar c">
                    <span></span>
                </div>
            </div>
            <div className='skills'>
                <div className="info">
                    Javascript
                </div>
                <div className="progress-bar js">
                    <span></span>
                </div>
            </div>
            <div className='skills'>
                <div className="info">
                    React
                </div>
                <div className="progress-bar react">
                    <span></span>
                </div>
            </div>
            
            
            <div className='skills'>
                <div className="info">
                    {<span>Machine learning & Nlp</span>}
                </div>
                <div className="progress-bar nlp">
                    <span></span>
                </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills