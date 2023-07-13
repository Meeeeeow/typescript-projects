import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import peep1 from './imgs/img/peep1.jpg';
import peep2 from './imgs/img/peep2.png';
import peep3 from './imgs/img/peep3.jpg';
import peep4 from './imgs/img/peep4.png';
import peep5 from  './imgs/img/peep5.png';
import peep6 from  './imgs/img/peep6.png';
import peep7 from  './imgs/img/peep7.png';
import peep8 from  './imgs/img/peep8.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(()=>{
    gsap.to('#peep',{
      scrollTrigger:{
       trigger: '#peep',
       start:'top 10%', 
       scrub:3,
       markers: true,
      },
       duration:5,
       x:480,
       y:-100,
       rotateX:10,
       z:500,
       rotationZ:5,
       ease:'Power0.easeInOut',
     })
  },[])
  return (
    <div className="App">
     <section className='peeps'>
       <img src={peep6} alt='peep' id='peep'/>
     </section>
    </div>
  );
}

export default App;
