import React,{ useEffect } from 'react';
import Navbars from './navbar';
import Skills from './skills';
import Projects from './projects';
import Banner from './banner';
import Footer from './footer';
import Contact from './contact';
import GotoTop from './gotoTop';
import Qualification from './qualification';
import peep6 from  '../assets/img/peep6.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CursorApp from './cursor';

gsap.registerPlugin(ScrollTrigger);
function Home() {

  useEffect(()=>{
    const timer = setTimeout(()=>{
      console.log('timeout called');
    },9000);

    return () => clearTimeout(timer);
  },[]);
  useEffect(() => {
    gsap.to('#peep',{
      scrollTrigger:{
       trigger:'#peep', 
       start:'top 50%', 
       end: '70% 100%',
       scrub : 1,
       markers:true,
      
      },
       x:290,
       y:-100,
       rotateX:12,
       z:550,
       rotationZ:8,
     })

     gsap.to('#peepa',{
      scrollTrigger:{
       trigger:'#peepa', 
       start:'top 50%', 
       end: '80% 90%',
       scrub : 1,
       markers:true,
      
      },
       x:2290,
       y:-100,
       rotateX:12,
       z:550,
       rotationZ:8,
     })
  },[])
  return (
    <div className='home-section'>
      <CursorApp/>
      <Navbars/>
      <Banner/>
      <section className="section-animated">
        <div className="peeps">
          <img src={peep6} alt='peep' id='peep'/>
        </div>
        <Skills/>
      </section>
      <Projects/>
      <section className='section-animated'>
          <div className="peeps">
            <img src={peep6} alt='peep' id='peepa'/>
          </div>
      </section>
      <Qualification/>
      <Contact/>
      <GotoTop/>
      <Footer/>
    </div>
  );
}

export default Home;
