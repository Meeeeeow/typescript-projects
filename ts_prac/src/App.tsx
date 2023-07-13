import React from 'react';
import './App.css';
import Button from './components/button';
import Greet from './components/greet';
import Headings from './components/Headings';
import Input from './components/input';
import Oscar from './components/oscar';
import Person from './components/person';
import Persons from './components/persons';
import Counter from './components/state/counter';
import Loggedin from './components/state/loggedin';
import User from './components/state/user';
import Status from './components/status';
import StyledContainer from './components/styledContainer';
function App() {
  const namePerson = {
    first : 'Karim',
    last : 'Sattar'
  }

  const namePersons = [
    {
      first : 'Rahim',
      last : 'Sattar'
    },
    {
      first : 'Abdus',
      last : 'Kudus'
    }
  ]

  const validAges = [ 23,25,26];
  return (
    <div className="App">
     <Greet name="Rahim" numMsgs={15} isLoggedIn = {true}/>
     <Person name={namePerson}/>
     <Persons names={namePersons} ages={validAges}/>
     <Greet  name="Karim" isLoggedIn={true}/>
     <Status status="success"/>
     <Headings>
       This is heading from children.
     </Headings>
     <Oscar>
       <Headings>
         This years oscar winner comes from react child as react component.
       </Headings>
     </Oscar>
     <Button handleClick={(event ,id)=>{
       console.log(event);
       console.log(`id is ${id}`);
       alert("Button is clicked!");
     }}/>
     <Input value="Hello"/>
     <StyledContainer styles={{backgroundColor:'gray' , border:'3px solid black' , color:'white', fontSize:'5rem'}}/>
     <Loggedin/>
     <User/>
     <Counter/>
    </div>
  );
}

export default App;
