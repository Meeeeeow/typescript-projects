import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Navbars from './components/navbar';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import { Container } from 'react-bootstrap';
import Banner from './components/banner';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbars/>
      <Banner/>
      
      <Container>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
