import React,{ useEffect } from 'react';
import Navbars from './navbar';
import Skills from './skills';
import Projects from './projects';
import Banner from './banner';
import Footer from './footer';
import Contact from './contact';
import GotoTop from './gotoTop';
import CursorApp from './cursor';
function Home() {

  useEffect(()=>{
    const timer = setTimeout(()=>{
      console.log('timeout called');
    },9000);

    return () => clearTimeout(timer);
  },[]);

  return (
    <div className='home-section'>
      <CursorApp/>
      <Navbars/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <GotoTop/>
      <Footer/>
    </div>
  );
}

export default Home;
