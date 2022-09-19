import React from 'react';
import './App.css';
import Navbars from './components/navbar';
import Skills from './components/skills';
import Projects from './components/projects';
import Banner from './components/banner';
import Footer from './components/footer';
import Contact from './components/contact';
import GotoTop from './components/gotoTop';
function App() {
  return (
    <>
      <Navbars/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <GotoTop/>
      <Footer/>
    </>
  );
}

export default App;
