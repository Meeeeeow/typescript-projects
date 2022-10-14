import React from 'react';
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
function App() {
  return (
    <div className="App">
     <section className='peeps'>
       <img src={peep6} alt='peep'/>
     </section>
    </div>
  );
}

export default App;
