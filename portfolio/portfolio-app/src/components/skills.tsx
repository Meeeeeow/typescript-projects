import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineDesignServices ,MdOutlineCode } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";

import TrackVisibility from 'react-on-screen';
const Skills = () => {
    const [trayOpen,setTrayOpen] = useState<boolean>(true);
    const [panel,setPanel] = useState<string>('panel1');

    const changeDisplay = (panels : string) =>{
        console.log(panel);
        console.log(`I am ${panels}`);
        setPanel(panel !== panels ?  panels : '');
       
        
    }
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
             
                        <div className={`skills-bar ${panel === 'panel1' ? 'skills-open' : 'skills-close'}`}>
                            <div className="skills_header" onClick={() => changeDisplay('panel1')}>
                                <div>
                                    <h1 className="skills-title">
                                        <span className="skills-icon"><MdOutlineDesignServices/></span> Frontend develoment
                                    </h1>
                                </div>
                                <span className="arrow-down"><FaAngleDown/></span>
                            </div>
                            <div className = 'skills-list '>
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
                        </div>
                    }
                    </TrackVisibility>
                    
                        {/* skills2 */}
                        <TrackVisibility>
          
                        {({ isVisible}) =>
                        <div className={`skills-bar ${panel === 'panel2' ? 'skills-open' : 'skills-close'}`}>
                        <div className="skills_header" onClick={() => changeDisplay('panel2')}>
                            <div>
                                <h1 className="skills-title">
                                    <span className="skills-icon"><AiOutlineDatabase/></span> Backend develoment
                                </h1>
                            </div>
                            <span className="arrow-down"><FaAngleDown/></span>
                        </div>
                        <div className = 'skills-list '>
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
                </div>
                }
                </TrackVisibility>
                {/* skills3 */}
                <TrackVisibility>
          
                        {({ isVisible}) =>
                <div className={`skills-bar ${panel === 'panel3' ? 'skills-open' : 'skills-close'}`} >
                        <div className="skills_header" onClick={() => changeDisplay('panel3')}>
                            <div>
                                <h1 className="skills-title">
                                    <span className="skills-icon"><MdOutlineCode/></span> Programming languages
                                </h1>
                            </div>
                            <span className="arrow-down"><FaAngleDown/></span>
                        </div>
                        <div className = 'skills-list'>
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