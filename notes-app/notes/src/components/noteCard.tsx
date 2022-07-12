import React , { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { noteProps } from '../interfaces/noteTypes'
import EditNotes from './editNotes'

type noteCardProps ={
  note : noteProps
  handleDelete : (id : string) => void,
  setNotes : React.Dispatch<React.SetStateAction<noteProps[]>>,
  notes : noteProps[]

}
const NoteCard = ({note , handleDelete , setNotes ,notes } : noteCardProps) => {
  const [show , setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
     <Card style = {{backgroundColor : note.color , marginBottom : "0.8rem"}}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
        <Button className='mt-3' variant='secondary' onClick ={()=> handleShow()}>Edit</Button>
        <Button className='mt-3 mx-3' variant='danger' onClick ={()=> handleDelete(note.id)}>Delete</Button>
      </Card.Body>
    </Card>
    <EditNotes show = {show} setShow ={setShow} handleClose = {handleClose} note = {note} setNotes = {setNotes} notes = {notes}/>
    </>
   
  )
}

export default NoteCard