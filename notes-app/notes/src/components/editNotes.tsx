import React , { useState , useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { noteProps } from '../interfaces/noteTypes'

type EditNoteProps = {
    show : boolean,
    setShow : React.Dispatch<React.SetStateAction<boolean>>,
    handleClose : () => void,
    note : noteProps,
    notes : noteProps[],
    setNotes : React.Dispatch<React.SetStateAction<noteProps[]>>
}
const EditNotes = ({show , setShow , handleClose , note ,  setNotes , notes} : EditNoteProps) => {
  const [title , setTitle] = useState<string>(note.title);
  const [text , setText] = useState<string>(note.text);
  const [color , setColor] = useState<string>(note.color);
  const handleUpdate = (id : string) =>{
    console.log(note.id);
    console.log(id);
    console.log(note.id === id);
    
    const updatedNote = {
      id : new Date().toString(),
      title,
      text,
      color,
      date : new Date().toString()
    }
    notes.map(note => {
      if(note.id === id)
      {
        note.id = updatedNote.id;
        note.title = title;
        note.text = text;
        note.color = color;
        note.date = updatedNote.date;
      }
      setShow(false);
      return '';
    })
   
  }
  useEffect(()=>{
    localStorage.setItem("AddedNotes" , JSON.stringify(notes));
    localStorage.setItem("test","123434");
  },[show])
  return (
    <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label><h5>Title</h5></Form.Label>
          <Form.Control type="text" placeholder = "Enter title for new note" style = {{width : "100%"}} value ={title} onChange ={(e) => {setTitle(e.target.value)}}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label><h5>Description</h5></Form.Label>
          <Form.Control as="textarea" placeholder = "Enter brief description about note" style = {{width : "100%"}} rows = {3} value ={text} onChange ={(e) => {setText(e.target.value)}}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicColor'>
          <Form.Label htmlFor='colorInput'><h5>Color</h5></Form.Label>
          <Form.Control id="colorInput" type="color" defaultValue="#ddffdd" title = "Choose note color" value ={color} onChange ={(e) => {setColor(e.target.value)}}/>
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(note.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditNotes