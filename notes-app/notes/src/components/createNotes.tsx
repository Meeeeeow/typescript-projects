import React, { useRef , useState ,useEffect  } from 'react'
import { noteProps } from '../interfaces/noteTypes'
import { Alert, Button, Form } from 'react-bootstrap'

type createNotesProps ={
  notes : noteProps[],
  setNotes : React.Dispatch<React.SetStateAction<noteProps[]>>
}
const CreateNotes = ({notes , setNotes} : createNotesProps) => {
  const titleRef = useRef< HTMLInputElement>(null);
  const textref = useRef<HTMLTextAreaElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const [error , setError] = useState<string>("");
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void =>{
    e.preventDefault();

    if(titleRef.current?.value === "" || textref.current?.value === "")
    {
      return setError("All the fields are mandatory!");
    }
    setError("");

    setNotes([...notes ,{
      id: new Date().toString(),
      title : (titleRef.current as HTMLInputElement).value,
      text : (textref.current as HTMLTextAreaElement).value,
      color : (colorRef.current as HTMLInputElement).value,
      date : new Date().toString() 
    }]);
    
   

    (titleRef.current as HTMLInputElement).value = "";
    (textref.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "";
  }
  useEffect(()=>{
    localStorage.setItem("AddedNotes" , JSON.stringify(notes));
  },[notes])
  return (
    <>
    {error && <Alert variant='danger' className='mt-3'>{error}</Alert>}
    <h2 className='mt-3 mb-3'>Create Notes</h2>
      <Form onSubmit={(e)=> handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label><h5>Title</h5></Form.Label>
          <Form.Control type="text" placeholder = "Enter title for new note" style = {{width : "40%"}} ref = { titleRef }/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label><h5>Description</h5></Form.Label>
          <Form.Control as="textarea" placeholder = "Enter brief description about note" style = {{width : "40%"}} rows = {3} ref = { textref }/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicColor'>
          <Form.Label htmlFor='colorInput'><h5>Color</h5></Form.Label>
          <Form.Control id="colorInput" type="color" defaultValue="#ddffdd" title = "Choose note color" ref = { colorRef }/>
        </Form.Group>
        <Button type='submit' variant='primary'>
            Create Note
        </Button>
      </Form>
     
    </>
  )
}

export default CreateNotes