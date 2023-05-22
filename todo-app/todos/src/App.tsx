import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
        <div className="w-full bg-blue-600">
            <h3 className="text-xl font-bold text-center p-3 text-white">Lorem Ipsum is simply dummy text of the printing</h3>
        </div> 
        <div className="flex flex-row">
          <Sidebar/> 
          <Main/>
        </div>
    </div>
  );
}

export default App;
