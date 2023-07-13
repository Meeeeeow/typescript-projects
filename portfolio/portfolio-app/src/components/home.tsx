import React,{ useEffect } from 'react';
import Navbars from './navbar';
import Skills from './skills';
import Projects from './projects';
import Banner from './banner';
import Footer from './footer';
import Contact from './contact';
import GotoTop from './gotoTop';
import Qualification from './qualification';
import pika from  '../assets/img/pika1.png';
import peep7 from  '../assets/img/peep7.png';

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
      },
       x:300,
       y:-100,
       rotateX:10,
       z:550,
       rotationZ:4,
     })

     gsap.to('#peepa',{
      scrollTrigger:{
       trigger:'#peepa', 
       start:'10% 52%', 
       end: '100% 90%',
       scrub : 2,
      },
       x:217,
       y:-110,
       rotationX:6,
       z:750,
       rotationZ:2,
     })
  },[])
  return (
    <div className='home-section'>
      <CursorApp/>
      <Navbars/>
      <Banner/>
      <section className="section-animated">
      <Skills/>
        <div className="peeps">
          <img src={peep7} alt='peep' id='peep'/>
        </div>
       
      </section>
      <Projects/>
      <section className='section-animated-space'>
          <div className="peeps-spaceship">
            <img src={pika} alt='peep' id='peepa'/>
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
