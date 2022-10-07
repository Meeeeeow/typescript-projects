import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import { motion } from 'framer-motion';
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
type projectCardProps = {
  project : projectSingle,
  clicked : string
}
const ProjectCard = ({project,clicked}: projectCardProps) => {
  return (
    <motion.div layout transition={{duration:0.6}} initial={{ opacity: 0 }} animate ={{ opacity:1 }}                                                                                                                   >
        <Card sx={{ maxWidth: 400 , height: 330 , position: 'relative'}} variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                    sx={{
                        mt : 2
                    }}>
                        <h5>Language Used:</h5>
                        {project.skills.map((skill,index) => (
                            index === project.skills.length - 1 ? skill : `${skill},`
                        ))}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: '0 10px 10px 0',
                        position: 'absolute',
                        bottom: 0,
                        right: 0
                    }}>
                    <Link href={project.website} target="_blank" rel="noreferrer">
                        <Button variant = 'contained' size="small" color ='primary' >Live Preview</Button>
                    </Link>

                    <Link href={project.github} target="_blank" rel="noreferrer">
                        <Button variant = 'outlined' size="small" color ='secondary' endIcon={<GitHubIcon/>}>View in Github</Button>
                    </Link>
                    
                </CardActions>
        </Card>
    </motion.div>
  )
}

export default ProjectCard