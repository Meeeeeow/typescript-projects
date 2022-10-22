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
import superman from '../assets/img/superman.png';
import spaceship from '../assets/img/spaceship1.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import CursorApp from './cursor';

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
       x:250,
       y:-100,
       rotateX:10,
       z:550,
       rotationZ:4,
     })

     gsap.to('#peepa',{
      scrollTrigger:{
       trigger:'#peepa', 
       start:'10% 50%', 
       end: '100% 80%',
       scrub : 5,
       markers:true,
      
      },
      duration:10,
       x:3190,
       y:-500,
       rotateX:12,
       scale:1.9,
       z:550,
       rotationZ:10,
     })
  },[])
  return (
    <div className='home-section'>
      {/* <CursorApp/> */}
      <Navbars/>
      <Banner/>
      <section className="section-animated">
      <Skills/>
        <div className="peeps">
          <img src={peep6} alt='peep' id='peep'/>
        </div>
       
      </section>
      <Projects/>
      <section className='section-animated'>
          <div className="peeps-spaceship">
            <img src={spaceship} alt='peep' id='peepa'/>
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
