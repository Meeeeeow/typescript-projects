import { Container } from '@mui/material';
import React,{useState} from 'react'
import { ProjectsDetails } from './data';
import ProjectCard from './projectCard';
type projectSingle ={
  id: number,
  title: string,
  category: string,
  image: string,
  skills: string[],
  description: string,
  website: string,
  github: string
}
const Projects = () => {
    const [clicked,setClicked] = useState<string>('all');
    const [allProjects,setAllProjects] = useState<projectSingle[]>(ProjectsDetails);

    const takeCategory = (category:string) => {
      setClicked(category);
      if(category === 'all'){
        setAllProjects(ProjectsDetails);
        return;
      }else{
        const newProjects = ProjectsDetails.filter(project => project.category === category);
        setAllProjects(newProjects);
      }
      
    }
  return (
    <Container maxWidth="xl">
        <div id='projects'> 
        <div className="project-heading">
            <h2>Let's see my work!</h2>
            <h3>My projects</h3>
        </div>

        <ul className="project-filter">
            <li className={`list ${clicked === 'all' ? "project-filter-active" : ""}`} onClick={()=> takeCategory('all')}>All</li>
            <li className={`list ${clicked === 'asp' ? "project-filter-active" : ""}`} onClick={()=> takeCategory('asp')}>ASP.NET</li>
            <li className={`list ${clicked === 'python' ? "project-filter-active" : ""}`} onClick={()=>takeCategory('python')}>Python</li>
            <li className={`list ${clicked === 'web' ? "project-filter-active" : ""}`} onClick={()=>takeCategory('web')}>HTML,CSS,JS</li>
            <li className={`list ${clicked === 'react' ? "project-filter-active" : ""}`} onClick={()=>takeCategory('react')}>ReactJS</li>
            <li className={`list ${clicked === 'ts' ? "project-filter-active" : ""}`} onClick={()=> takeCategory('ts')}>Typescript</li>
            <li className={`list ${clicked === 'ps' ? "project-filter-active" : ""}`} onClick={()=>takeCategory('ps')}>Photoshop</li>
        </ul>
        <div className = 'projects'>
        {
            allProjects.map((project : projectSingle ,index : number) => (
                <div className="project-card" key={index}>
                    <ProjectCard project={project} clicked={clicked}/>
                </div> 
            ))
        }
        </div>
        </div>
    </Container>
  )
}

export default Projects