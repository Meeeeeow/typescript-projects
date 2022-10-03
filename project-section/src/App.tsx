import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
     <>
        <Routes>
          <Route path = '/' element = {<Loading/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </>
    </div>
  );
}

export default App;
