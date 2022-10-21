import React from 'react';
import './App.css';
import { Route, Routes  } from 'react-router-dom';
import Loading from './components/loading';
import Home from './components/home';


function App() {
  return (
    <>
        
        <Routes>
          <Route path = '/' element = {<Loading/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </>
  );
}

export default App;
