import React from 'react'
import { MdOutlineSchool } from "react-icons/md";
import { GiAxeSword } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
const Qualification = () => {
  return (
    <section className='qualification section' id='qualification'>
        <div className="title">
              <h2>My Journey</h2>
              <div>
                  <h2>My Journey</h2>
              </div>
        </div>

        <div className="qualification-container">
                  <div className="qualification-tabs">
                        <div className="qualification-button">
                            <span className="study-icon">
                                <MdOutlineSchool/> 
                            </span>
                            Education
                        </div>
                        <div className="qualification-button">
                            <span className="study-icon">
                                <GiAxeSword/> 
                            </span>
                            Work
                        </div>
                  </div>
        </div>

        <div className="qualification-sections container">
                    {/* Qualification content1 */}
            <div className="qualification-content">
                {/* qualification1  */}
                <div className="qualification-data">
                    <div className = 'qualifcation-desc'>
                        <h3 className="qualification-header">MSc inComputer Science and Engineering</h3>
                        <span className="qualification-subtitle">Bangladesh University of Engineering and Technology</span>
                        <div className="qualification-calendar">
                            <span className="calendar-icon">
                                <GoCalendar/> 
                            </span>
                            2023 - Present
                        </div>
                    </div>

                   
                </div>
                <div className="qualification-data">
                    <div className = 'qualifcation-desc'>
                        <h3 className="qualification-header">BSc in Computer Science and Engineering</h3>
                        <span className="qualification-subtitle">Ahsanullah University of Science and Technology</span>
                        <div className="qualification-calendar">
                            <span className="calendar-icon">
                                <GoCalendar/> 
                            </span>
                            2017 - 2022
                        </div>
                    </div>

                   
                </div>

                <div className="qualification-data">
                

                    <div className = 'qualifcation-desc'>
                        <h3 className="qualification-header">Higher Secondary Certificate(Science)</h3>
                        <span className="qualifcation-subtitle">Notredame College</span>
                        <div className="qualification-calendar">
                            <span className="calendar-icon">
                                <GoCalendar/> 
                            </span>
                            2014 - 2016
                        </div>
                    </div>
                </div>

                <div className="qualification-data">
                    <div className = 'qualifcation-desc'>
                        <h3 className="qualification-header">Secondary Scool Certificate(Science)</h3>
                        <span className="qualification-subtitle">Monipur High School & College</span>
                        <div className="qualification-calendar">
                            <span className="calendar-icon">
                                <GoCalendar/> 
                            </span>
                            2004 - 2014
                        </div>
                    </div>
                </div>
            </div>

            <span className = 'qualification-line'></span>
                    {/* qualification content2 */}
            <div className="qualification-content">
                {/* qualification1  */}
                <div className="qualification-data">
                    <div></div>
                    <div className="qualification-design">
                        <span className="qualification-rounder"></span>
                        {/* <span className="qualification-line"></span> */}
                    </div>

                    <div className = 'qualifcation-desc'>
                        <h3 className="qualification-header">Junior Software Developer</h3>
                        <span className="qualification-subtitle">Radiant Data Systems</span>
                        <div className="qualification-calendar">
                            <span className="calendar-icon">
                                <GoCalendar/> 
                            </span>
                            2022 - Current
                        </div>
                    </div>
                    <div className = 'qualifcation-desc' style={{marginTop:'30px'}}>
                        <h3 className="qualification-header">Part-time Frontend Developer</h3>
                        <span className="qualification-subtitle">BiznextIT</span>
                        <div className="qualification-calendar">
                            <span className="calendar-icon">
                                <GoCalendar/> 
                            </span>
                            April 2023 - Jun 2023
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification;