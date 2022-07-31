import React from 'react'
import { Col } from 'react-bootstrap'
type projectCardProps = {
    title : string,
    description : string,
    imgUrl : string 
}
const ProjectCard = ({title , description , imgUrl} : projectCardProps) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-img">
            <img src={imgUrl} alt=""/>
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>   
        </div>
    </Col>
  )
}

export default ProjectCard