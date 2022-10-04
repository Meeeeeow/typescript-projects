import { Container } from '@mui/material';
import React,{useState, useEffect} from 'react'
import { ProjectsDetails } from './data';
import ProjectCard from './projectCard';
import {motion} from 'framer-motion';
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
    const [filteredProjects,setFilteredProjects] = useState<projectSingle[]>(ProjectsDetails);

    console.log(allProjects);

    useEffect(()=>{
      if(clicked === 'all'){
        setAllProjects(allProjects);
        setFilteredProjects(allProjects);
        return;
      }else{
        const filtered = allProjects.filter(project => project.category === clicked);
        setFilteredProjects(filtered); 
      }
    },[clicked,allProjects])
    // const takeCategory = (category:string) => {
    //   setClicked(category);
    //   if(category === 'all'){
    //     setAllProjects(ProjectsDetails);
    //     setFilteredProjects(ProjectsDetails);
    //     return;
    //   }else{
    //     const newProjects = ProjectsDetails.filter(project => project.category === category);
    //     setFilteredProjects(newProjects);
    //   }
      
    // }
  return (
    <Container maxWidth="xl">
        <div id='projects'> 
        <div className="project-heading">
            <h2>Let's see my work!</h2>
            <h3>My projects</h3>
        </div>

        <ul className="project-filter">
            <li className={`list ${clicked === 'all' ? "project-filter-active" : ""}`} onClick={()=>  setClicked('all')}>All</li>
            <li className={`list ${clicked === 'asp' ? "project-filter-active" : ""}`} onClick={()=>  setClicked('asp')}>ASP.NET</li>
            <li className={`list ${clicked === 'python' ? "project-filter-active" : ""}`} onClick={()=> setClicked('python')}>Python</li>
            <li className={`list ${clicked === 'web' ? "project-filter-active" : ""}`} onClick={()=> setClicked('web')}>HTML,CSS,JS</li>
            <li className={`list ${clicked === 'react' ? "project-filter-active" : ""}`} onClick={()=> setClicked('react')}>ReactJS</li>
            <li className={`list ${clicked === 'ts' ? "project-filter-active" : ""}`} onClick={()=>  setClicked('ts')}>Typescript</li>
            <li className={`list ${clicked === 'ps' ? "project-filter-active" : ""}`} onClick={()=> setClicked('ps')}>Photoshop</li>
        </ul>
        <motion.div layout transition={{duration:1}} initial={{ opacity: 0 }} animate ={{ opacity:1 }} className = 'projects'>
        {
            filteredProjects.map((project : projectSingle ,index : number) => (
                <div className="project-card" key={index}>
                    <ProjectCard project={project} clicked={clicked}/>
                </div> 
            ))
        }
        </motion.div>
        </div>
    </Container>
  )
}

export default Projects