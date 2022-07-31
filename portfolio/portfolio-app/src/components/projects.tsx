import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp from '../assets/img/color-sharp2.png';
import ProjectCard from './projectCard';
const Projects = () => {
  const projects=[
    {
      title:"Business Startup",
      description: "Design & Development",
      imgUrl : projImg1
    },
    {
      title:"Business Startup",
      description: "Design & Development",
      imgUrl : projImg2
    },
    {
      title:"Business Startup",
      description: "Design & Development",
      imgUrl : projImg3
    },

  ]
  return (
    <section className='project'>
      <Container>
        <Row>
          <Col>
          <div className="title">
              <h2>Projects</h2>
              <div>
                  <h2>projects</h2>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo magni dolor praesentium accusantium vitae inventore, velit adipisci sequi delectus eos, aperiam in odit, voluptatem laborum deserunt? Aperiam, animi a.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Tab.Container id="project-tabs" defaultActiveKey="first">
            <Nav variant="tabs" className='nav-pills mb-5 jusify-content-center align-items-center'>
                <Nav.Item>
                  <Nav.Link eventKey="first" id="tab-first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" id="tab-second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" id="tab-third">
                    Tab 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project , index)=>{
                          return(
                            <ProjectCard {...project} key={Math.random()}></ProjectCard>
                          )
                        })
                      }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">

                </Tab.Pane>
                <Tab.Pane eventKey="third">

                </Tab.Pane>
              </Tab.Content>
          </Tab.Container>
            
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-img" alt=""/>
    </section>
  )
}

export default Projects