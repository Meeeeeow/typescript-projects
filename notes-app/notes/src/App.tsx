import React , { useState  } from 'react';
import Header from './components/header';
import './App.css';
import { noteProps } from './interfaces/noteTypes';
import { Col, Container , Row } from 'react-bootstrap';
import NotesList from './components/notesList';
import CreateNotes from './components/createNotes';
function App() {
  if(localStorage.getItem("AddedNotes") === null){
    localStorage.setItem("AddedNotes" , JSON.stringify([{
      id : new Date().toString(),
      title : "Demo title",
      text : "Demo text",
      color : "#dfdfdf",
      date : new Date().toString()
    }]))
  }
  const [notes , setNotes] = useState<noteProps[]>(JSON.parse(localStorage.getItem("AddedNotes") || ""));
 
  
  return (
    <>
      <Header/>
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes = {notes} setNotes = {setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes = {notes} setNotes = {setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
